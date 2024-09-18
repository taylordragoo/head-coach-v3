import World from '@/models/World';
import College from "@/models/College";
import LeagueController from "@/controllers/LeagueController";
import data from '@/data/colleges.json';

export default class WorldService {
    private static instance: WorldService;
    private leagueController: LeagueController;

    private constructor() {
        this.leagueController = LeagueController.getInstance();
    }

    public static getInstance(): WorldService {
        if (!WorldService.instance) {
            WorldService.instance = new WorldService();
        }

        return WorldService.instance;
    }

    handleCreateNewWorld() {
        for(let i = 0; i < data.colleges.length; i++) {
            College.insert({
                data: data.colleges[i]
            });
        }

        World.insert({
            data: {
                id: 0,
                user_id: 0,
                date: '02/11/2024',
                phase: 0,
                season: 2024
            }
        });

        let message = this.leagueController.createDefaultLeagues();
        console.log(message);
        return message;
    }
}
