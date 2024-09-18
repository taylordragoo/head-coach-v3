import Dexie from "dexie";
import CareerController from "@/controllers/CareerController";
import User from '@/models/User';
import World from '@/models/World';
import League from '@/models/League';
import Team from '@/models/Team';
import Player from '@/models/Player';
import Match from "@/models/Match";
import Born from "@/models/Born";
import College from "@/models/College";
import Draft from "@/models/Draft";
import DepthChart from "@/models/DepthChart";
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
import Contract from "@/models/Contract";
import TrainingSchedule from "@/models/TrainingSchedule";
import Activity from "@/models/Activity";
import Conference from "@/models/Conference";
import Division from "@/models/Division";
import Season from "@/models/Season";
import Staff from "@/models/Staff";
import StaffContract from "@/models/StaffContract";
import { getModelConfig, tableNames } from "@/data/constants";

class DatabaseService {
    private static instance: DatabaseService;
    public db: Dexie;
    public dbTemplate: Dexie;
    public db_name: string;
    public modelConfig = getModelConfig();

    private constructor(name: string = 'default') {
        this.db = new Dexie(name);
        this.dbTemplate = new Dexie(name);
        this.db_name = name;
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
            const data = await this.generateData();
            console.log("Initialize: " + data);
            if(data !== undefined) {
                await this.populateDB(data);
            }
            return data;
        } else {
            return await this.handleGetCareerDataFromDatabase(this.dbTemplate);
        }
    }

    async generateData() {
        const cc :CareerController = CareerController.getInstance();
        return await cc.createDefaultData();
    }

    async newGame(request: any) {
        console.log(request);
        this.db = new Dexie('fbgm_' + request.first + "_" + request.last);
        await this.initDB(this.db);
        await this.copyDB(this.dbTemplate, this.db);
    
        User.insert({
            data: {
                id: 0,
                first: request.first,
                last: request.last,
                age: request.age,
                exp: request.exp,
                skill: request.skill,
                team_id: request.team_id
            }
        });
    
        for (const [tableName, model] of Object.entries(this.modelConfig)) {
            console.log("New Game: " + tableName);
            const data = await this.db.table(tableName).toArray();
            await model.insert({ data });
        }

        await this.handleSaveCareer();
    
        await this.handleCloseDatabase(this.dbTemplate);
    }

    async initDB(db: Dexie) {
        const schema = {};
        Object.keys(this.modelConfig).forEach(modelName => {
            console.log("Init DB: " + modelName);
            schema[modelName] = 'id';
        });
    
        db.version(1).stores(schema);
        await db.open().catch((error) => {
            console.error("Failed to open db: ", error);
        });
    }

    async copyDB(dbFrom: Dexie, dbTo) {
        for (const tableName of Object.keys(this.modelConfig)) {
            console.log("Copy DB: " + tableName);
            const data = await dbFrom.table(tableName).toArray();
            await this.handleBulkPutOperation(dbTo[tableName], data, tableName);
        }
    }

    async handleSaveDefaultDatabase() {
        try {
            const db_name = "default";
    
            // spreading the team object here because vuexy does not support deep merge
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
    
            const request = Object.keys(this.modelConfig).reduce((acc, modelName) => {
                if (modelName === 'teams') {
                    acc[modelName] = t;
                } else {
                    acc[modelName] = this.modelConfig[modelName].all();
                }
                return acc;
            }, {type: "save", db: db_name});
    
            console.log(request);
    
            const db: Dexie | null = await this.handleOpenExistingDatabase(db_name);
    
            if (db) {
                console.log(db)
                for (const modelName of Object.keys(this.modelConfig)) {
                    console.log("Save Model: " + modelName);
                    const modelData = request[modelName];
                    if (modelData && modelData.length > 0) {
                        const table = db.table(modelName);
                        await this.handleBulkPutOperation(table, modelData, modelName);
                    }
                }
            }
        } catch (error) {
            console.error("Error saving career data:", error);
        }
    }

    async handleSaveCareer() {
        try {
            let u: User = User.all();
            u = u[0];
            console.log(u);
            const db_name = "fbgm_" + u.first + "_" + u.last;
    
            // spreading the team object here because vuexy does not support deep merge
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
    
            const request = Object.keys(this.modelConfig).reduce((acc, modelName) => {
                if (modelName === 'teams') {
                    acc[modelName] = t;
                } else {
                    acc[modelName] = this.modelConfig[modelName].all();
                }
                return acc;
            }, {type: "save", db: db_name});
    
            console.log(request);
    
            const db: Dexie | null = await this.handleOpenExistingDatabase(db_name);
    
            if (db) {
                console.log(db)
                for (const modelName of Object.keys(this.modelConfig)) {
                    console.log("Save Model: " + modelName);
                    const modelData = request[modelName];
                    if (modelData && modelData.length > 0) {
                        const table = db.table(modelName);
                        await this.handleBulkPutOperation(table, modelData, modelName);
                    }
                }
            }
        } catch (error) {
            console.error("Error saving career data:", error);
        }
    }

    public async handleOpenExistingDatabase(name: string) {
        if (await this.handleDbExistence(name)) {
            const db = new Dexie(name);
            let version = 1;
    
            
            try {
                if (!db.isOpen()) {
                    console.log("Opening DB: " + name);
                    await db.open();
                } else {
                    console.log("DB already open: " + name);
                }

                for (const tableName of tableNames) {
                    const schema = {};
                    schema[tableName] = 'id';
                    if (!db.tables.some(table => table.name === tableName)) {
                        console.log("New Table: " + tableName);
                        // db.version(version++).stores(schema);
                    }
                }
                
                return db;
            } catch (error) {
                console.error("Failed to open db: ", error);
                return null;
            }
        } else {
            console.log("Database does not exist");
            return null;
        }
    }

    public async handleGetCareerDataFromDatabase(db: Dexie) {
        try {
            const careerData = {};
    
            for (const tableName of Object.keys(this.modelConfig)) {
                console.log("Get Career Data: " + tableName);
                const data = await db.table(tableName).toArray();
                careerData[tableName] = data;
            }
    
            return careerData;
        } catch (error) {
            console.error("Failed to get career data from db: ", error);
        }
    }
    
    async populateDB(request) {
        console.log(request);
        for (const tableName of Object.keys(this.modelConfig)) {
            try {
                console.log("Populate DB: " + tableName);
                if (request[tableName] && request[tableName].length > 0) {
                    await this.handleBulkPutOperation(this.dbTemplate.table(tableName), request[tableName], tableName);
                }
            } catch (error) {
                console.error(`Error in populate db operation for ${tableName}: `, error);
            }
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

    public async handleTableOperation(table, data) {
        if (table) {
            const operation = Array.isArray(data) ? table.bulkPut : table.put;
            await operation(data).then(function(lastKey) {
                console.log(`Last ${table.name}'s id was: ${lastKey ?? 'N/A'}`);
            }).catch(Dexie.BulkError, function(e) {
                console.error(`Some ${table.name}s did not succeed. However, ${100000 - e.failures.length} ${table.name}s was added successfully`);
            });
        }
    };

    async handleBulkPutOperation(db, items, modelName) {
        console.log(items)
        try {
            console.log(`Bulk Put: ${modelName}`);
            await db.bulkPut(items);
            console.log(`Bulk put operation successful for ${modelName}`);
        } catch (error) {
            console.error(`Error in bulk put operation for ${modelName}: `, error);
        }
    }
}

export default DatabaseService;
