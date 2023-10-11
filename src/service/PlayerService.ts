import Player from '@/models/Player';
import faker from 'faker';
import data from '@/data/colleges.json';
import players from '@/data/players.json';

export default class PlayerService {
    private static instance: PlayerService;

    constructor() {}

    public static getInstance(): PlayerService {
        if (!PlayerService.instance) {
            PlayerService.instance = new PlayerService();
        }

        return PlayerService.instance;
    }

    handleCreatePlayers(player) {
        const _players = players.players.map(player => {
            return this.handleGeneratePlayer(player);
        })

        console.log(_players);

        Player.insert({
            data: _players
        })

        return _players;
    }

    handleGeneratePlayer(p) {
        let college = data.colleges.find(college => college.region === p.college) || data.colleges[0];
        return {
            id: p.pid,
            pid: p.pid,
            team_id: p.tid,
            first_name: faker.name.firstName(),
            last_name: faker.name.lastName(),
            height: p.hgt,
            weight: p.weight,
            value: p.value,
            value_no_pot: p.valueNoPot,
            value_fuzz: p.valueFuzz,
            value_no_pot_fuzz: p.valueNoPotFuzz,
            health: {
                pid: p.pid,
                status: p.injury.type
            },
            born: {
                pid: p.pid,
                year: p.born.year,
                location: p.born.loc
            },
            college_id: college.tid,
            contract: {
                pid: p.pid,
                amount: p.contract.amount,
                expires: p.contract.exp
            },
            draft: {
                pid: p.pid,
                round: p.draft.round,
                pick: p.draft.pick,
                tid: p.draft.tid,
                year: p.draft.year,
                pot: p.draft.pot,
                ovr: p.draft.ovr,
                skills: p.draft.skills
            },
            ratings: {
                pid: p.pid,
                position: p.ratings[0].pos,
                strength: p.ratings[0].stre,
                speed: p.ratings[0].spd,
                agility: p.ratings[0].elu,
                acceleration: p.ratings[0].rtr,
                throw_power: p.ratings[0].thp,
                throw_accuracy_short: p.ratings[0].tha,
                throw_accuracy_mid: p.ratings[0].tha,
                throw_accuracy_deep: p.ratings[0].tha,
                throw_on_the_run: p.ratings[0].thv,
                play_action: p.ratings[0].thv,
                carrying: p.ratings[0].bsc,
                catching: p.ratings[0].hnd,
                route_running: p.ratings[0].hnd,
                release: p.ratings[0].hnd,
                run_blocking: p.ratings[0].rbk,
                pass_blocking: p.ratings[0].pbk,
                tackle: p.ratings[0].tck,
                pass_coverage: p.ratings[0].pcv,
                press: p.ratings[0].prs,
                run_stop: p.ratings[0].rns,
                kick_power: p.ratings[0].kpw,
                kick_accuracy: p.ratings[0].kac,
                punt_power: p.ratings[0].ppw,
                punt_accuracy: p.ratings[0].pac,
                stamina: p.ratings[0].endu,
                fuzz: p.ratings[0].fuzz,
                overall: p.ratings[0].ovr,
                potential: p.ratings[0].pot,
                overalls: {
                    QB: p.ratings[0].ovrs.QB,
                    RB: p.ratings[0].ovrs.RB,
                    WR: p.ratings[0].ovrs.WR,
                    TE: p.ratings[0].ovrs.TE,
                    OL: p.ratings[0].ovrs.OL,
                    DL: p.ratings[0].ovrs.DL,
                    LB: p.ratings[0].ovrs.LB,
                    CB: p.ratings[0].ovrs.CB,
                    S: p.ratings[0].ovrs.S,
                    K: p.ratings[0].ovrs.K,
                    P: p.ratings[0].ovrs.P
                },
                potentials: {
                    QB: p.ratings[0].pots.QB,
                    RB: p.ratings[0].pots.RB,
                    WR: p.ratings[0].pots.WR,
                    TE: p.ratings[0].pots.TE,
                    OL: p.ratings[0].pots.OL,
                    DL: p.ratings[0].pots.DL,
                    LB: p.ratings[0].pots.LB,
                    CB: p.ratings[0].pots.CB,
                    S: p.ratings[0].pots.S,
                    K: p.ratings[0].pots.K,
                    P: p.ratings[0].pots.P
                }
            },
            salaries: p.salaries,
            awards: [],
            injuries: []
        };
    }
}
