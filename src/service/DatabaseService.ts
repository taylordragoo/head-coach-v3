import Dexie from "dexie";
import CareerController from "@/controllers/CareerController";
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

class DatabaseService {
    private static instance: DatabaseService;
    public db: any;
    public dbTemplate: any;
    public db_name: string;

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

    private constructor(name: string = 'default') {
        this.dbTemplate = new Dexie(name);
    }

    public static getInstance(name: string): DatabaseService {
        if (!DatabaseService.instance) {
            DatabaseService.instance = new DatabaseService(name);
        } else if (DatabaseService.instance.db_name !== name) {
            throw new Error(`Attempted to get instance with name ${name}, but instance already exists with name ${DatabaseService.instance.db_name}`);
        }

        return DatabaseService.instance;
    }

    public handleGetName() {
        return this.db.name;
    }

    public handleGetTables() {
        return this.db.tables;
    }

    public async handleGetAllDatabases() {
        return Dexie.getDatabaseNames();
    }

    async initialize() {
        await this.initDB(this.dbTemplate);
        const count = await this.dbTemplate.world.count();
        if (count === 0) {
            const data = this.generateData();
            console.log(data);
            await this.populateDB(data);
            return data;
        } else {
            return await this.handleGetCareerDataFromDatabase(this.dbTemplate);
        }
    }

    async newGame(request) {
        this.db = new Dexie(request.first + " " + request.last);
        await this.initDB(this.db);
        await this.copyDB(this.dbTemplate, this.db);

        await User.insert({
            data: {
                id: 0,
                first: request.first,
                last: request.last,
                age: request.age,
                exp: request.exp,
                skill: request.skill,
                team_id: request.team_id
            }
        })

        const user = await User.query().first().$toJson();
        await this.db.user.put(user);

        const player = await this.db.table('players').toArray();
        const team = await this.db.table('teams').toArray();
        const world = await this.db.table('world').toArray();
        const league = await this.db.table('leagues').toArray();
        const matches = await this.db.table('matches').toArray();
        const awards = await this.db.table('awards').toArray();
        const transactions = await this.db.table('transactions').toArray();
        const draft = await this.db.table('draft').toArray();
        const health = await this.db.table('health').toArray();
        const born = await this.db.table('born').toArray();
        const ratings = await this.db.table('ratings').toArray();
        const college = await this.db.table('college').toArray();
        const salaries = await this.db.table('salaries').toArray();
        const stats = await this.db.table('stats').toArray();
        const injuries = await this.db.table('injuries').toArray();
        const contracts = await this.db.table('contracts').toArray();
        const relatives = await this.db.table('relatives').toArray();
        const overalls = await this.db.table('overalls').toArray();
        const potentials = await this.db.table('potentials').toArray();
        const skills = await this.db.table('skills').toArray();
        const phases = await this.db.table('phases').toArray();

        await Team.insert({ data: team })
        await Player.insert({ data: player })
        await League.insert({ data: league })
        await World.insert({ data: world })
        await Match.insert({ data: matches })
        await Award.insert({ data: awards })
        await Transaction.insert({ data: transactions })
        await Draft.insert({ data: draft })
        await Health.insert({ data: health })
        await Born.insert({ data: born })
        await Ratings.insert({ data: ratings })
        await College.insert({ data: college })
        await Salary.insert({ data: salaries })
        await Stat.insert({ data: stats })
        await Injury.insert({ data: injuries })
        await Contract.insert({ data: contracts })
        await Relative.insert({ data: relatives })
        await Overalls.insert({ data: overalls })
        await Potentials.insert({ data: potentials })
        await Skill.insert({ data: skills })
        await Phase.insert({ data: phases })

        await this.handleCloseDatabase(this.dbTemplate);

    }

    async initDB(db) {
        db.version(1).stores({
            user: "id",
            teams: "id",
            players: "id",
            world: 'id',
            leagues: "id",
            matches: "id",
            awards: "id",
            transactions: "id",
            draft: "id",
            health: "id",
            born: "id",
            ratings: "id",
            college: "id",
            salaries: "id",
            stats: "id",
            injuries: "id",
            contracts: "id",
            relatives: "id",
            overalls: "id",
            potentials: "id",
            skills: "id",
            phases: "id"
        });
        await db.open().catch((error) => {
            console.error("Failed to open db: ", error);
        });
    }

    generateData() {
        const cc :CareerController = CareerController.getInstance();
        return cc.createDefaultData();
    }

    async copyDB(dbFrom, dbTo) {
        // Copy data from dbFrom to dbTo
        const world = await dbFrom.world.toArray();
        const players = await dbFrom.players.toArray();
        const teams = await dbFrom.teams.toArray();
        const leagues = await dbFrom.leagues.toArray();
        const matches = await dbFrom.matches.toArray();
        const awards = await dbFrom.awards.toArray();
        const transactions = await dbFrom.transactions.toArray();
        const draft = await dbFrom.draft.toArray();
        const health = await dbFrom.health.toArray();
        const born = await dbFrom.born.toArray();
        const ratings = await dbFrom.ratings.toArray();
        const college = await dbFrom.college.toArray();
        const salaries = await dbFrom.salaries.toArray();
        const stats = await dbFrom.stats.toArray();
        const injuries = await dbFrom.injuries.toArray();
        const contracts = await dbFrom.contracts.toArray();
        const relatives = await dbFrom.relatives.toArray();
        const overalls = await dbFrom.overalls.toArray();
        const potentials = await dbFrom.potentials.toArray();
        const skills = await dbFrom.skills.toArray();
        const phases = await dbFrom.phases.toArray();

        await this.handleBulkPutOperation(dbTo.world, world, 'world');
        await this.handleBulkPutOperation(dbTo.leagues, leagues, 'league');
        await this.handleBulkPutOperation(dbTo.players, players, 'player');
        await this.handleBulkPutOperation(dbTo.teams, teams, 'team');
        await this.handleBulkPutOperation(dbTo.matches, matches, 'match')
        await this.handleBulkPutOperation(dbTo.awards, awards, 'award')
        await this.handleBulkPutOperation(dbTo.transactions, transactions, 'transaction')
        await this.handleBulkPutOperation(dbTo.draft, draft, 'draft')
        await this.handleBulkPutOperation(dbTo.health, health, 'health')
        await this.handleBulkPutOperation(dbTo.born, born, 'born')
        await this.handleBulkPutOperation(dbTo.ratings, ratings, 'ratings')
        await this.handleBulkPutOperation(dbTo.college, college, 'college')
        await this.handleBulkPutOperation(dbTo.salaries, salaries, 'salaries')
        await this.handleBulkPutOperation(dbTo.stats, stats, 'stats')
        await this.handleBulkPutOperation(dbTo.injuries, injuries, 'injuries')
        await this.handleBulkPutOperation(dbTo.contracts, contracts, 'contracts')
        await this.handleBulkPutOperation(dbTo.relatives, relatives, 'relatives')
        await this.handleBulkPutOperation(dbTo.overalls, overalls, 'overalls')
        await this.handleBulkPutOperation(dbTo.potentials, potentials, 'potentials')
        await this.handleBulkPutOperation(dbTo.skills, skills, 'skills')
        await this.handleBulkPutOperation(dbTo.phases, phases, 'phases')
    }

    async handleSaveCareer() {
        try {
            let u: User = User.all();
            u = u[0];
            console.log(u);
            const db_name = u.first + " " + u.last;

            const t = Team.all().map(team => {
                return {
                    ...team,
                    budget: {
                        scouting: {...team.budget.scouting},
                        coaching: {...team.budget.coaching},
                        health: {...team.budget.health},
                        facilities: {...team.budget.facilities},
                    },
                    coach: {...team.coach},
                };
            });

            const request = {
                type: "save",
                db: db_name,
                user: [u],
                world: World.all(),
                players: Player.all(),
                teams: t,
                leagues: League.all(),
                matches: Match.all(),
                draft: Draft.all(),
                health: Health.all(),
                born: Born.all(),
                ratings: Ratings.all(),
                college: College.all(),
                salaries: Salary.all(),
                contracts: Contract.all(),
                overalls: Overalls.all(),
                potentials: Potentials.all(),
                // awards: Award.all(),
                // transactions: Transaction.all(),
                // stats: Stat.all(),
                // injuries: Injury.all(),
                // relatives: Relative.all(),
                // skills: Skill.all(),
                // phases: Phase.all(),
            }

            console.log(request)

            const db: Dexie | null = await this.handleOpenExistingDatabase(request.db);

            if(db) {

                await this.handleBulkPutOperation(db.world, request.world, 'world');
                await this.handleBulkPutOperation(db.leagues, request.leagues, 'leagues');
                await this.handleBulkPutOperation(db.players, request.players, 'players');
                await this.handleBulkPutOperation(db.teams, request.teams, 'teams');
                await this.handleBulkPutOperation(db.user, request.user, 'user')
                await this.handleBulkPutOperation(db.matches, request.matches, 'matches');
                await this.handleBulkPutOperation(db.draft, request.draft, 'draft');
                await this.handleBulkPutOperation(db.health, request.health, 'health');
                await this.handleBulkPutOperation(db.born, request.born, 'born');
                await this.handleBulkPutOperation(db.ratings, request.ratings, 'ratings');
                await this.handleBulkPutOperation(db.college, request.college, 'college');
                await this.handleBulkPutOperation(db.salaries, request.salaries, 'salaries');
                await this.handleBulkPutOperation(db.contracts, request.contracts, 'contracts');
                await this.handleBulkPutOperation(db.overalls, request.overalls, 'overalls');
                await this.handleBulkPutOperation(db.potentials, request.potentials, 'potentials');

                // await this.handleBulkPutOperation(db.awards, request.awards, 'awards');
                // await this.handleBulkPutOperation(db.transactions, request.transactions, 'transactions');
                // await this.handleBulkPutOperation(db.stats, request.stats, 'stats');
                // await this.handleBulkPutOperation(db.injuries, request.injuries, 'injuries');
                // await this.handleBulkPutOperation(db.relatives, request.relatives, 'relatives');
                // await this.handleBulkPutOperation(db.skills, request.skills, 'skills');
                // await this.handleBulkPutOperation(db.phases, request.phases, 'phases');
            }

        } catch (error) {
            console.error(error);
        }
    }

    public async handleOpenExistingDatabase(name: string) {
        if (await this.handleDbExistence(name)) {
            const db = new Dexie(name);
            db.version(1).stores({
                user: "id",
                teams: "id",
                players: "id",
                world: 'id',
                leagues: "id",
                matches: "id",
                awards: "id",
                transactions: "id",
                draft: "id",
                health: "id",
                born: "id",
                ratings: "id",
                college: "id",
                salaries: "id",
                stats: "id",
                injuries: "id",
                contracts: "id",
                relatives: "id",
                overalls: "id",
                potentials: "id",
                skills: "id",
                phases: "id"
            });
            try {
                if(this.handleDbStatus(db)) {
                    return db;
                } else {
                    await db.open();
                    return db;
                }
            } catch (error) {
                console.error("Failed to open db: ", error);
                return null;
            }
        } else {
            console.log("Database does not exist")
            return null;
        }
    }

    public async handleGetCareerDataFromDatabase(db: Dexie) {
        try {
            const teams: Team[] = await db.table('teams').toArray();
            const players: Player[] = await db.table('players').toArray();
            const user: User[] = await db.table('user').toArray();
            const world: World[] = await db.table('world').toArray();
            const leagues: League[] = await db.table('leagues').toArray();
            const matches: Match[] = await db.table('matches').toArray();
            const awards: Award[] = await db.table('awards').toArray();
            const transactions: Transaction[] = await db.table('transactions').toArray();
            const draft: Draft[] = await db.table('draft').toArray();
            const health: Health[] = await db.table('health').toArray();
            const born: Born[] = await db.table('born').toArray();
            const ratings: Ratings[] = await db.table('ratings').toArray();
            const college: College[] = await db.table('college').toArray();
            const salaries: Salary[] = await db.table('salaries').toArray();
            const stats: Stat[] = await db.table('stats').toArray();
            const injuries: Injury[] = await db.table('injuries').toArray();
            const contracts: Contract[] = await db.table('contracts').toArray();
            const relatives: Relative[] = await db.table('relatives').toArray();
            const overalls: Overalls[] = await db.table('overalls').toArray();
            const potentials: Potentials[] = await db.table('potentials').toArray();
            const skills: Skill[] = await db.table('skills').toArray();
            const phases: Phase[] = await db.table('phases').toArray();

            return {
                user: user,
                world: world,
                players: players,
                teams: teams,
                leagues: leagues,
                matches: matches,
                awards: awards,
                transactions: transactions,
                draft: draft,
                health: health,
                born: born,
                ratings: ratings,
                college: college,
                salaries: salaries,
                stats: stats,
                injuries: injuries,
                contracts: contracts,
                relatives: relatives,
                overalls: overalls,
                potentials: potentials,
                skills: skills,
                phases: phases
            };
        } catch (error) {
            console.error("Failed to get career data from db: ", error);
        }
    }

    public async handleCloseDatabase(db: Dexie) {
        if(this.handleDbStatus(db)) {
            await db.close();
            console.log("Database successfully closed");
        } else {
            console.log("Database is not open");
        }
    }

    public handleDbStatus(db: Dexie) {
        if (db.isOpen()) {
            console.log("Database is open");
            return true
        } else {
            console.log("Database is not open");
            return false
        }
    }

    public async handleDbExistence(name: string) {
        if (!(await Dexie.exists(name))) {
            console.log(`${name} Db does not exist`);
            return false;
        } else {
            console.log(`${name} Db does exist`);
            return true;
        }

        return false;
    };

    public async handleDeleteCareer(db) {
        try {
            await Dexie.delete(db);
            console.log("Database successfully deleted");
        } catch (err) {
            console.error("Could not delete database", err);
        }
    }

    async populateDB(request) {
        await this.handleBulkPutOperation(this.dbTemplate.world, request.world, 'world');
        await this.handleBulkPutOperation(this.dbTemplate.leagues, request.leagues, 'league');
        await this.handleBulkPutOperation(this.dbTemplate.players, request.players, 'player');
        await this.handleBulkPutOperation(this.dbTemplate.teams, request.teams, 'team');
        await this.handleBulkPutOperation(this.dbTemplate.matches, request.matches, 'matches');
        await this.handleBulkPutOperation(this.dbTemplate.draft, request.draft, 'draft');
        await this.handleBulkPutOperation(this.dbTemplate.health, request.health, 'health');
        await this.handleBulkPutOperation(this.dbTemplate.born, request.born, 'born');
        await this.handleBulkPutOperation(this.dbTemplate.ratings, request.ratings, 'ratings');
        await this.handleBulkPutOperation(this.dbTemplate.college, request.college, 'college');
        await this.handleBulkPutOperation(this.dbTemplate.salaries, request.salaries, 'salaries');
        await this.handleBulkPutOperation(this.dbTemplate.contracts, request.contracts, 'contracts');
        await this.handleBulkPutOperation(this.dbTemplate.overalls, request.overalls, 'overalls');
        await this.handleBulkPutOperation(this.dbTemplate.potentials, request.potentials, 'potentials');

        // await this.handleBulkPutOperation(this.dbTemplate.awards, request.awards, 'award');
        // await this.handleBulkPutOperation(this.dbTemplate.transactions, request.transactions, 'transaction');
        // await this.handleBulkPutOperation(this.dbTemplate.stats, request.stats, 'stats');
        // await this.handleBulkPutOperation(this.dbTemplate.relatives, request.relatives, 'relatives');
        // await this.handleBulkPutOperation(this.dbTemplate.injuries, request.injuries, 'injuries');
        // await this.handleBulkPutOperation(this.dbTemplate.skills, request.skills, 'skills');
        // await this.handleBulkPutOperation(this.dbTemplate.phases, request.phases, 'phases');
    }

    public async handleTableOperation(table, data) {
        if (table) {
            const operation = Array.isArray(data) ? table.bulkPut : table.put;
            await operation(data).then(function(lastKey) {
                console.log(`Last ${table.name}'s id was: ${lastKey}`);
            }).catch(Dexie.BulkError, function(e) {
                console.error(`Some ${table.name}s did not succeed. However, ${100000 - e.failures.length} ${table.name}s was added successfully`);
            });
        }
    };

    private async handleBulkPutOperation(collection, items, itemName): Promise<void> {
        try {
            if(collection) {
                console.log(collection)
                const lastKey = await collection.bulkPut(items);
                console.log(`Last ${itemName}'s id was: ${lastKey}`);
            }
        } catch (e) {
            if (e instanceof Dexie.BulkError) {
                console.error(`Some ${itemName}s did not succeed. However, ` + (100000 - e.failures.length) + ` ${itemName}s was added successfully`);
            } else {
                throw e;
            }
        }
    }
}

export default DatabaseService;
