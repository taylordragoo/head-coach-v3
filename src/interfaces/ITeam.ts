export default interface ITeam {
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