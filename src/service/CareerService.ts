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
import { DEFAULT_SCHEDULE, PHASE, getModelConfig, tableNames } from "@/data/constants";

class CareerService {
    private static instance: CareerService;
    private teamService = new TeamService();
    public modelConfig = getModelConfig();

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
        const teams: Team[] = Team.all().map(team => {
            const newTeam = new Team();
            Object.assign(newTeam, team, {
                budget: {
                    scouting: { amount: team.budget.scouting.amount, rank: team.budget.scouting.rank },
                    coaching: { amount: team.budget.coaching.amount, rank: team.budget.coaching.rank },
                    health: { amount: team.budget.health.amount, rank: team.budget.health.rank },
                    facilities: { amount: team.budget.facilities.amount, rank: team.budget.facilities.rank },
                },
                coach: { ...team.coach },
            });
            return newTeam;
        });

        const defaultData: any = {
            type: "default",
            db_name: 'default',
            teams: teams,
        };

        for (const tableName of Object.keys(this.modelConfig)) {
            if (tableName !== 'teams' && tableName !== 'season') {
                defaultData[tableName] = this.modelConfig[tableName].all();
            }
        }

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
                    await this.modelConfig[tableName].insert({ data: request[tableName] });
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

    /**
     * Handle the update of daily state by setting phase based on week, fetching all ratings and storing them in a Map,
     * getting all teams, creating an array of promises for each team's performance evaluation, waiting for all team
     * performance evaluations to complete, and logging the performance of each team.
     *
     * @return {Promise<void>} Promise that resolves once the daily state update is handled
     */
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

    /**
     * Handle setting the phase based on the current week.
     */ 
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
                    // Update the league's current phase if it's different from the current phase
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
