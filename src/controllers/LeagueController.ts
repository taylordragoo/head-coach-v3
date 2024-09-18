import { TeamController } from '@/controllers/index';
import LeagueService from '@/service/LeagueService';

export default class LeagueController {
    private static instance: LeagueController;
    public leagueService: LeagueService;
    public teamController: TeamController;

    constructor() {
        this.leagueService = LeagueService.getInstance();
        this.teamController = TeamController.getInstance();
    }

    public static getInstance(): LeagueController {
        if (!LeagueController.instance) {
            LeagueController.instance = new LeagueController();
        }

        return LeagueController.instance;
    }

    createDefaultLeagues() {
        return this.leagueService.handleCreateDefaultLeagues();
        // this.leagueService.generateSchedule(1);
    }
}
