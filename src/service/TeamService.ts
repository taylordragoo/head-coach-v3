import Team from '@/models/Team';
import faker from 'faker';

interface Team {
    id: number;
    lid: number;
    tid: number;
    name: string;
    abbreviation: string;
    country: string;
    budget: {
        scouting: {
            amount: number;
            rank: number;
        }
        coaching: {
            amount: number;
            rank: number;
        }
        health: {
            amount: number;
            rank: number;
        }
        facilities: {
            amount: number;
            rank: number;
        }
    }
    strategy: string;
    coach: {
        top: number;
        jgl: number;
        mid: number;
        adc: number;
        sup: number;
        topJGL: number;
        jglJGL: number;
        midJGL: number;
        adcJGL: number;
        supJGL: number;
    }
    seasons: any;
    stats: any;
    players: Player[];
    league: League;
}

export default class TeamService {
    private static instance: TeamService;

    constructor() {}

    public static getInstance(): TeamService {
        if (!TeamService.instance) {
            TeamService.instance = new TeamService();
        }

        return TeamService.instance;
    }

    handleCreateNewTeams(teams)
    {
        const _teams = teams.map(team => {
            console.log(team)
            return this.handleGenerateTeam(team);
        })

        console.log(_teams);

        Team.insert({
            data: _teams
        })
    }

    handleGenerateTeam(data) {
        return {
            id: data.tid,
            lid: 1,
            tid: data.tid,
            cid: data.cid,
            did: data.did,
            name: data.name,
            abbreviation: data.abbrev,
            img_url: data.img_url,
            country: 'USA',
            budget: {
                scouting: {
                    amount: data.budget.scouting.amount,
                    rank: data.budget.scouting.rank,
                },
                coaching: {
                    rank: data.budget.coaching.rank,
                    amount: data.budget.coaching.amount,
                },
                health: {
                    rank: data.budget.health.rank,
                    amount: data.budget.health.amount,
                },
                facilities: {
                    rank: data.budget.facilities.rank,
                    amount: data.budget.facilities.amount,
                }
            },
            strategy: data.strategy,
            population: data.pop,
            stadium_capacity: data.stadiumCapacity,
            seasons: data.seasons
        }
    }

    handleGetDefaultTeams() {
        const teams: Team[] = Team.all().map((team: Instance<Team>) => {
            return {
                ...team,
                budget: {
                    scouting: { ...team.budget.scouting },
                    coaching: { ...team.budget.coaching },
                    health: { ...team.budget.health },
                    facilities: { ...team.budget.facilities },
                },
                coach: { ...team.coach },
            };
        });

        return teams;
    }
}
