import StoreService from '@/service/StoreService';
import {Database} from "@vuex-orm/core";

class StoreController {
    private static instance: StoreController;
    private storeService: StoreService;
    constructor() {
        this.storeService = StoreService.getInstance();
    }

    public static getInstance(): StoreController {
        if (!StoreController.instance) {
            StoreController.instance = new StoreController();
        }

        return StoreController.instance;
    }

    public getStore(): any {
        return this.storeService.getStore();
    }

    public getDatabase(): Database {
        return this.storeService.database;
    }
}

export default StoreController;
