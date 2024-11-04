import { useRepo } from 'pinia-orm'
import {Dexie} from "dexie";
import DatabaseController from "@/controllers/DatabaseController";
import WorldController from "@/controllers/WorldController";
import TeamService from "@/service/TeamService";
import User from '@/models/User';
import World from '@/models/World';
import League from '@/models/League';
import Team from '@/models/Team';
import Player from '@/models/Player';
import Match from "@/models/Match";
import TrainingSchedule from "@/models/TrainingSchedule";
import Activity from "@/models/Activity";
import Born from "@/models/Born";
import College from "@/models/College";
import Conference from "@/models/Conference";
import DepthChart from "@/models/DepthChart";
import Division from "@/models/Division";
import Contract from "@/models/Contract";
import Draft from "@/models/Draft";
import Ratings from "@/models/Ratings";
import Health from "@/models/Health";
import Injury from "@/models/Injury";
import Relative from "@/models/Relative";
import Salary from "@/models/Salary";
import Stat from "@/models/Stat";
import Transaction from "@/models/Transaction";
import Award from "@/models/Award";
import Overalls from "@/models/Overalls";
import Potentials from "@/models/Potentials";
import Skill from "@/models/Skill";
import Phase from "@/models/Phase";
import Season from "@/models/Season";
import Staff from "@/models/Staff";
import StaffContract from "@/models/StaffContract";
import { DEFAULT_SCHEDULE, PHASE, getModelRepo, tableNames } from "@/data/constants";

class CareerService {
    private static instance: CareerService;
    private teamService = new TeamService();
    public modelConfig = getModelRepo();

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
            defaultData[tableName] = this.modelConfig[tableName].all();
        }

        console.log(defaultData);

        return defaultData;
    }

    public async handleLoadSelectedCareer(name: string): Promise<void> {
        try {
            const dbc: DatabaseController = DatabaseController.getInstance();
            const db: Dexie | null = await dbc.openExistingDatabase(name);
            if (db) {
                const data: any= await dbc.getCareerDataFromDatabase(db);
                await this.handleInsertVuexData(data);
            }
        } catch (error) {
            console.error(`Failed to load career: ${error}`);
        }
    }

    public async handleInsertVuexData(request: any): Promise<void>{
        try {
            for (const tableName of Object.keys(this.modelConfig)) {
                if (request[tableName] && request[tableName].length > 0) {
                    console.log(`Populate DB: ${tableName}`);
                    await this.modelConfig[tableName].insert(request[tableName]);
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

    public async handleCreateDefaultWorld(): Promise<any> {
        const wc: WorldController = WorldController.getInstance();
        return wc.createWorld();
    }

    public async handleContinueCareer(): Promise<void> {
        await this.handleUpdateDailyState();
        console.log("Continue Career");
    }

    public async handleUpdateDailyState(): Promise<void> {
        this.handleSetPhaseBasedOnWeek();
    
        // Fetch all ratings and store them in a Map
        const ratingsRepo = useRepo(Ratings);
        const ratings = ratingsRepo.all();
        const ratingsMap = new Map(ratings.map(rating => [rating.pid, rating]));

        const teamsRepo = useRepo(Team);
        const teams = teamsRepo.all();

        // Create an array of promises for each team's performance evaluation
        const teamPerformancePromises = teams.map((team: Team) => 
            this.teamService.evaluateTeamPerformance(team.id)
        );

        // Wait for all team performance evaluations to complete
        const teamPerformances = await Promise.all(teamPerformancePromises);

        // Sort teamPerformances and teams in descending order based on performance
        const sortedTeamsAndPerformances = teamPerformances
            .map((performance, index) => ({ performance, team: teams[index] }))
            .sort((a, b) => b.performance - a.performance);

        // Log the performance of each team
        sortedTeamsAndPerformances.forEach(({ team, performance }) => {
            console.log(`Team ${team.name} performance: ${performance}`);
        });
    }

    public handleSetPhaseBasedOnWeek(): void {
        console.log("Set Phase Based On Week");
        const worldsRepo = useRepo(World);
        const worlds = worldsRepo.all();
        const world = worlds[0];
        let leagues: League[] = [];
        const leaguesRepo = useRepo(League);
        // Get all leagues in the world
        if(world) {
            leagues = leaguesRepo.query().where('wid', world.id).get();
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
                    // Update the league's current phase if it's different from the current phase
                    if (leg.phase !== phase.id) {
                        leg.phase = phase.id;
                        leaguesRepo.save(leg);
                        console.log(`Updated ${leg.name} phase to ${phase.name} on week ${world.currentWeek} on day ${world.currentDayOfWeek}`);
                    }
                    break;
                }
            }
        });
    }


}

export default CareerService;
