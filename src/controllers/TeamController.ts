import { PlayerController } from '@/controllers/index';
import TeamService from '@/service/TeamService';
import team_data from '@/data/teams.json';

export default class TeamController {
    private static instance: TeamController;
    public teamService: TeamService;
    public playerController: PlayerController;

    constructor() {
        this.teamService = TeamService.getInstance();
        this.playerController = PlayerController.getInstance();
    }

    public static getInstance(): TeamController {
        if (!TeamController.instance) {
            TeamController.instance = new TeamController();
        }

        return TeamController.instance;
    }

    async create() {
        await this.teamService.handleCreateNewTeams(team_data.teams);
    }

    read() {
        this.teamService.handleGetDefaultTeams();
    }

    update() {

    }

    delete() {

    }
}
