import {Dexie} from "dexie";
import DatabaseController from "@/controllers/DatabaseController";
import WorldController from "@/controllers/WorldController";
import TeamService from "@/service/TeamService";
import World from '@/models/World';
import League from '@/models/League';
import Team from '@/models/Team';
import Ratings from "@/models/Ratings";
import { DEFAULT_SCHEDULE, PHASE, getModelConfig, tableNames, ModelTypes } from "@/data/constants";

class CareerService {
    private static instance: CareerService;
    private teamService = new TeamService();
    private modelConfig: ModelTypes = getModelConfig();

    private constructor() {}

    public static getInstance(): CareerService {
        if (!CareerService.instance) {
            CareerService.instance = new CareerService();
        }

        return CareerService.instance;
    }

    public async handleCareerData(request: any, db: Dexie): Promise<any> {
        try {
            for (const tableName of tableNames) {
                const table = db.table(tableName);
                const data = request[tableName];
            }
        } catch (err) {
            console.log(`Error: ${err}`);
        } finally {
            return db;
        }
    };

    public handleGetDefaultData: any = () => {
        const defaultData: any = {
            type: "default",
            db_name: 'default'
        };

        for (const tableName of Object.keys(this.modelConfig)) {
            const Model = this.modelConfig[tableName as keyof ModelTypes];
            defaultData[tableName] = Model.all();
        }

        return defaultData;
    }

    public async handleLoadSelectedCareer(name: string): Promise<void> {
        try {
            const dbc: DatabaseController = DatabaseController.getInstance();
            const db: Dexie | null = await dbc.openExistingDatabase(name);
            if (db) {
                const data: any= await dbc.getCareerDataFromDatabase(db);
                console.log(data);
                await this.handleInsertVuexData(data);
            }
        } catch (error) {
            console.error(`Failed to load career: ${error}`);
        }
    }

    public async handleInsertVuexData(request: any): Promise<void> {
        try {
            for (const tableName of Object.keys(this.modelConfig)) {
                // console.log(`Processing table: ${tableName}`);
                const Model = this.modelConfig[tableName as keyof ModelTypes];
                const data = request[tableName];
                console.log(`Type of data for ${tableName}: ${typeof data}, isArray: ${Array.isArray(data)}`);
                if (data && data.length > 0) {
                    console.log(`Populate DB: ${tableName}`, JSON.stringify(data));
                    if (data.some(item => item === null || item === undefined)) {
                        console.log(`Null or undefined item in data for ${tableName}`);
                    }
                    await Model.insert({data: data});
                } else {
                    console.log(`Skipping ${tableName} as data is empty or undefined`);
                }
            }
        } catch (err) {
            console.log(`Error: ${err}`);
        }
        return;
    }

    public async handleDeleteCareer(db: string): Promise<void> {
        const dbc: DatabaseController = DatabaseController.getInstance();
        await dbc.deleteDatabase(db);
    }

    public async handleCreateNewCareer(request: any): Promise<any> {
        const dbc: DatabaseController = DatabaseController.getInstance();
        if(await dbc.databaseService.handleDbExistence(request))
        return await this.handleCareerData(request, dbc.databaseService.db);
    }

    public async handleSaveCareer(): Promise<void> {
        try {
            const dbc: DatabaseController = DatabaseController.getInstance();
            await dbc.saveDatabase();
        } catch (error) {
            console.error(`Failed to save career: ${error}`);
        }
    }

    public handleCreateDefaultWorld() {
        const wc: WorldController = WorldController.getInstance();
        return wc.createWorld();
    }

    public async handleContinueCareer(): Promise<void> {
        await this.handleUpdateDailyState();
        // console.log("Continue Career");
    }

    public async handleUpdateDailyState(): Promise<void> {
        this.handleSetPhaseBasedOnWeek();
    
        // Fetch all ratings and store them in a Map
        const ratings = Ratings.all();
        const ratingsMap = new Map(ratings.map(rating => [rating.pid, rating]));

        const teams = Team.all();

        // Create an array of promises for each team's performance evaluation
        const teamPerformancePromises = teams.map((team: Team) => 
            this.teamService.evaluateTeamPerformance(team.id, ratingsMap)
        );

        // Wait for all team performance evaluations to complete
        const teamPerformances = await Promise.all(teamPerformancePromises);

        // Log the performance of each team
        teams.forEach((team: Team, index: number) => {
            console.log(`Team ${team.name} performance: ${teamPerformances[index]}`);
        });
    }

    public handleSetPhaseBasedOnWeek(): void {
        console.log("Set Phase Based On Week");
        const worlds = World.all();
        const world = worlds[0];
        let leagues: League[] = [];
        // Get all leagues in the world
        if(world) {
            leagues = League.query().where('wid', world.id).get();
        }

        // Iterate through each league
        leagues.forEach(league => {
            const leg: League = league;
            // Import the league's schedule, assuming the league schedule type is stored in the league model.
            const schedule: PHASE[] = DEFAULT_SCHEDULE;

            // Loop through the schedule to find the current phase
            for (let i = 0; i < schedule.length; i++) {
                const phase = schedule[i];
                // Check if the current week is within the phase's start and end weeks
                if (world.currentWeek >= phase.startWeek && world.currentWeek <= phase.endWeek) {
                    // Update the league's current phase if it's different from the current phas'
                    if (leg.phase !== phase.id) {
                        leg.phase = phase.id;
                        leg.$save();
                        console.log(`Updated ${leg.name} phase to ${phase.name} on week ${world.currentWeek} on day ${world.currentDayOfWeek}`);
                    }
                    break;
                }
            }
        });
    }

}

export default CareerService;
