import DatabaseService from '@/service/DatabaseService';
import CareerController from "@/controllers/CareerController";
import Dexie from "dexie";

class DatabaseController {
    private static instance: DatabaseController;
    public databaseService: DatabaseService;
    public careerController: CareerController;

    private constructor(databaseName: string = 'default') {

        this.databaseService = DatabaseService.getInstance(databaseName);
        this.careerController = CareerController.getInstance();
    }

    public static getInstance(databaseName: string = 'default'): DatabaseController {
        if (!DatabaseController.instance) {
            DatabaseController.instance = new DatabaseController(databaseName);
        }

        return DatabaseController.instance;
    }

    public getName() {
        return this.databaseService.handleGetName();
    }

    public getTables() {
        return this.databaseService.handleGetTables();
    }

    public getAllDatabases() {
        return this.databaseService.handleGetAllDatabases();
    }

    public initDefaultDatabase() {
        return this.databaseService.initialize();
    }

    public createNewDatabase(request: any) {
        return this.databaseService.newGame(request);
    }

    public deleteDatabase(databaseName: string) {
        return this.databaseService.handleDeleteCareer(databaseName);
    }

    public saveDatabase() {
        return this.databaseService.handleSaveCareer();
    }

    public saveDefaultDatabase() {
        return this.databaseService.handleSaveDefaultDatabase();
    }

    public openExistingDatabase(name: string) {
        return this.databaseService.handleOpenExistingDatabase(name);
    }

    public closeDatabase(db: Dexie) {
        this.databaseService.handleCloseDatabase(db);
    }

    public getDatabase() {
        return this.databaseService.handleGetAllDatabases();
    }

    public getCareerDataFromDatabase(db: Dexie) {
        return this.databaseService.handleGetCareerDataFromDatabase(db);
    }
}

export default DatabaseController;
