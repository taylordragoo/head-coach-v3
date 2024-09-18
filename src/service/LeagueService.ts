import League from '@/models/League';
import Team from "@/models/Team";
import TeamService from '@/service/TeamService';
import Match from "@/models/Match";
import schedule from '../data/schedule.json';
import team_data from '@/data/teams.json';
import { DEFAULT_CONFS, DEFAULT_DIVS } from "@/data/constants";
import _ from 'lodash';

export default class LeagueService {
    private static instance: LeagueService;
    public teamService: TeamService;

    constructor() {
        this.teamService = TeamService.getInstance();
    }

    public static getInstance(): LeagueService {
        if (!LeagueService.instance) {
            LeagueService.instance = new LeagueService();
        }

        return LeagueService.instance;
    }

    async handleCreateDefaultLeagues()
    {
        League.insert({
            data: {
                id: 1,
                name: "National Football Association",
                abbrev: "NFL",
                country: "North America",
                wid: 0,
                phase: 0,
                tier: 1,
                scheduleType: 'DEFAULT'
            },
        })

        await this.teamService.handleCreateNewTeams(team_data.teams);
        return "Default league and teams created";
    }

    generateSchedule(leagueId) {
        let teams = Team.query().where('lid', leagueId).get();

        let matches = schedule;

        let week = 1;
        let totalWeeks = 18;

        while (week < totalWeeks) {
            matches[week].forEach(match => {
                Match.insert({
                    data: {
                        homeTeamId: match.homeTid,
                        awayTeamId: match.awayTid,
                        week: week,
                        leagueId: leagueId,
                    }
                });
            });

            week++;
        }
    }

}
