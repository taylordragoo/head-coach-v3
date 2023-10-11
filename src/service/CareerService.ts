import DatabaseController from "@/controllers/DatabaseController";
import WorldController from "@/controllers/WorldController";
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
import {Dexie} from "dexie";
import { DEFAULT_SCHEDULE, PHASE } from "@/data/constants";

class CareerService {
    private static instance: CareerService;
    public tableNames: string[] = [
        'user',
        'world',
        'players',
        'teams',
        'leagues',
        'matches',
        'awards',
        'transactions',
        'draft',
        'health',
        'born',
        'ratings',
        'college',
        'salaries',
        'stats',
        'injuries',
        'contracts',
        'relatives',
        'overalls',
        'potentials',
        'skills',
        'phases',
    ];

    private constructor() {}

    public static getInstance(): CareerService {
        if (!CareerService.instance) {
            CareerService.instance = new CareerService();
        }

        return CareerService.instance;
    }

    public async handleCareerData(request, db): Promise<any> {
        try {
            for (const tableName of this.tableNames) {
                const table = db.table(tableName);
                const data = request[tableName];
                // await this.handleTableOperation(table, data);
            }
        } catch (err) {
            console.log(`Error: ${err}`);
        } finally {
            return db;
        }
    };

    public handleGetDefaultData: any = () => {

        const teams: Team[] = Team.all().map(team => {
            return {
                ...team,
                budget: {
                    scouting: { ...team.budget.scouting },
                    coaching: { ...team.budget.coaching },
                    health: { ...team.budget.health },
                    facilities: { ...team.budget.facilities },
                },
                coach: { ...team.coach },
            };
        });

        return {
            type: "default",
            db_name: 'default',
            world: World.all(),
            players: Player.all(),
            teams: teams,
            leagues: League.all(),
            matches: Match.all(),
            training_schedules: TrainingSchedule.all(),
            activities: Activity.all(),
            born: Born.all(),
            college: College.all(),
            conference: Conference.all(),
            division: Division.all(),
            contracts: Contract.all(),
            draft: Draft.all(),
            ratings: Ratings.all(),
            health: Health.all(),
            injuries: Injury.all(),
            relatives: Relative.all(),
            salaries: Salary.all(),
            stats: Stat.all(),
            transactions: Transaction.all(),
            awards: Award.all(),
            overalls: Overalls.all(),
            potentials: Potentials.all(),
            skills: Skill.all(),
            phases: Phase.all()
        };
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


    public async handleInsertVuexData(request): Promise<void>{
        try {
            // insert data into vuex-orm store
            await User.insert({ data: request.user })
            await World.insert({ data: request.world })
            await League.insert({ data: request.leagues })
            await Team.insert({ data: request.teams })
            await Player.insert({ data: request.players })
            await Match.insert({ data: request.matches })
            await Born.insert({ data: request.born })
            await College.insert({ data: request.college })
            await Contract.insert({ data: request.contracts })
            await Draft.insert({ data: request.draft })
            await Ratings.insert({ data: request.ratings })
            await Health.insert({ data: request.health })
            await Salary.insert({ data: request.salaries })
            await Overalls.insert({ data: request.overalls })
            await Potentials.insert({ data: request.potentials })

            // await TrainingSchedule.insert({ data: request.training_schedules })
            // await Activity.insert({ data: request.activities })
            // await Conference.insert({ data: request.conference })
            // await Division.insert({ data: request.division })
            // await Injury.insert({ data: request.injuries })
            // await Relative.insert({ data: request.relatives })
            // await Stat.insert({ data: request.stats })
            // await Transaction.insert({ data: request.transactions })
            // await Award.insert({ data: request.awards })
            // await Skill.insert({ data: request.skills })
            // await Phase.insert({ data: request.phases })

        } catch (err) {
            console.log(`Error: ${err}`);
        }
        return;
    }

    public async handleDeleteCareer(db): Promise<void> {
        const dbc: DatabaseController = DatabaseController.getInstance();
        await dbc.deleteDatabase(db);
    }

    public async handleCreateNewCareer(request): Promise<any> {
        const dbc: DatabaseController = DatabaseController.getInstance();
        // if(await this.handleDbExistence(request))
        // return await this.handleCareerData(request, db);
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

    public handleContinueCareer(): void {
        this.handleUpdateDailyState();
        console.log("Continue Career");
    }

    public handleUpdateDailyState(): void {
        this.handleSetPhaseBasedOnWeek();
        // Additional Daily Logic
        console.log("Update Daily State");
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
