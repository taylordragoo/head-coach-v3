import {
    WorldService,
} from '@/service/index';

class WorldController {
    public static instance: WorldController;
    public worldService: WorldService;

    constructor() {
        this.worldService = WorldService.getInstance();
    }

    public static getInstance(): WorldController {
        if (!WorldController.instance) {
            WorldController.instance = new WorldController();
        }

        return WorldController.instance;
    }

    public createWorld() {
        return this.worldService.handleCreateNewWorld();
    }
}

export default WorldController;
