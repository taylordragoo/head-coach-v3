import World from '@/models/World';
import College from "@/models/College";
import LeagueService from "@/service/LeagueService";
import data from '@/data/colleges.json';

export default class WorldService {
    private static instance: WorldService;
    private leagueService: LeagueService;

    private constructor() {
        this.leagueService = LeagueService.getInstance();
    }

    public static getInstance(): WorldService {
        if (!WorldService.instance) {
            WorldService.instance = new WorldService();
        }

        return WorldService.instance;
    }

    async handleCreateNewWorld() {
        await College.insert({
            data: data.colleges
        });

        const world = await World.insert({
            data: {
                id: 0,
                user_id: 0,
                date: '02/11/2024',
                phase: 0,
                season: 2024
            }
        });
        console.log(world);

        let message = await this.leagueService.handleCreateDefaultLeagues();
        console.log(message);
        return message;
    }
}
