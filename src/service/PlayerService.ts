import * as faker from 'faker';
import colleges from '@/data/colleges.json';
import Utilities from '@/utils/utilities';

import IPlayer from '@/interfaces/IPlayer';
import Ratings from "@/models/Ratings";

import { MIN_POSITION_COUNTS, MAX_POSITION_COUNTS, POSITIONS, POSITION_ARCHETYPES, TECHNICAL_ARCHETYPES, MENTAL_ARCHETYPES, POSITION_MAPPING, SECONDARY_POSITION_MAPPING } from '@/data/constants';

export default class PlayerService {
    private static instance: PlayerService;

    public static getInstance(): PlayerService {
        if (!PlayerService.instance) {
            PlayerService.instance = new PlayerService();
        }

        return PlayerService.instance;
    }

    async handleGeneratePlayer(p: any) {
        console.log(p);
        let college = colleges.colleges.find((c) => c.region === p.college) || {"tid": 0, "id": 0, "did": 1, "region": "Duke", "name": "Blue Devils", "abbrev": "DUKE", "pop": 320, "city": "Durham ", "state": "NC", "latitude": 35.988, "longitude": -78.907};
        let player: IPlayer = {
            id: p.pid,
            pid: p.pid,
            team_id: p.tid >= 0 ? (p.tid + 1) : p.tid,
            first_name: p.firstName,
            last_name: p.lastName,
            height: p.hgt,
            weight: p.weight,
            value: p.value,
            value_no_pot: p.valueNoPot,
            value_fuzz: p.valueFuzz,
            value_no_pot_fuzz: p.valueNoPotFuzz,
            college_id: college.id,
            college: college,
            health: {
                pid: p.pid,
                status: p.injury.type
            },
            born: {
                pid: p.pid,
                year: p.born.year,
                location: p.born.loc
            },
            contract: {
                player_id: p.pid,
                amount: p.contract.amount,
                expires: p.contract.exp
            },
            draft: {
                pid: p.pid,
                round: p.draft.round,
                pick: p.draft.pick,
                year: p.draft.year,
                pot: p.draft.pot,
                ovr: p.draft.ovr,
                orig_team_id: p.draft.tid
            },
            position: await Promise.all(SECONDARY_POSITION_MAPPING[p.pos || "QB"].map(pos => ({
                player_id: p.pid,
                position: pos
            }))),
            ratings: await Promise.all(p.ratings.map((rating: any) => {
                const mappedRating = {
                    pid: p.pid,
                    position: rating.pos,
                    fuzz: rating.fuzz,
                    overall: rating.ovr,
                    potential: rating.pot,
                    season: rating.season,
                    position_archetype: this.getArchetypeByPosition(rating.pos),
                    mental_archetype: this.getMentalArchetype(),
                    // Mental Attrs
                    aniticipation: this.initialRating(),
                    composure: this.initialRating(),
                    concentration: this.initialRating(),
                    decisions: this.initialRating(),
                    determination: this.initialRating(),
                    leadership: this.initialRating(),
                    teamwork: this.initialRating(),
                    work_rate: this.initialRating(),
                    // Physical Attrs
                    speed: rating.spd,
                    acceleration: rating.spd,
                    agility: rating.spd,
                    strength: rating.stre,
                    vertical: rating.stre,
                    stamina: rating.endu,
                    // Throwing Attrs
                    throw_power: rating.thp,
                    throw_accuracy_short: rating.tha,
                    throw_accuracy_mid: rating.tha,
                    throw_accuracy_deep: rating.tha,
                    throw_on_the_run: rating.thv,
                    play_action: rating.thv,
                    // Ballcarrier Attrs
                    carrying: rating.bsc,
                    break_tackle: rating.elu,
                    stiff_arm: rating.elu,
                    spin_move: rating.elu,
                    trucking: rating.elu,
                    juking: rating.elu,
                    // Receiving Attrs
                    short_route_running: rating.rtr,
                    medium_route_running: rating.rtr,
                    deep_route_running: rating.rtr,
                    catching: rating.hnd,
                    release: rating.hnd,
                    catch_in_traffic: rating.hnd,
                    // Blocking Attrs
                    run_blocking: rating.rbk,
                    pass_blocking: rating.pbk,
                    run_block_power: rating.rbk,
                    pass_block_power: rating.pbk,
                    run_block_finesse: rating.rbk,
                    pass_block_finesse: rating.pbk,
                    // Defensive Attrs
                    shed_block: rating.rns,
                    tackle: rating.tck,
                    hit_power: rating.prs,
                    play_recognition: rating.tck,
                    pursuit: rating.tck,
                    man_coverage: rating.pcv,
                    zone_coverage: rating.pcv,
                    press: rating.prs,
                    // Kicking Attrs
                    kick_power: rating.kpw,
                    kick_accuracy: rating.kac,
                    punt_power: rating.ppw,
                    punt_accuracy: rating.pac,
                    overalls: {
                        QB: rating.ovrs.QB,
                        RB: rating.ovrs.RB,
                        WR: rating.ovrs.WR,
                        TE: rating.ovrs.TE,
                        OL: rating.ovrs.OL,
                        DL: rating.ovrs.DL,
                        LB: rating.ovrs.LB,
                        CB: rating.ovrs.CB,
                        S: rating.ovrs.S,
                        K: rating.ovrs.K,
                        P: rating.ovrs.P
                    },
                    potentials: {
                        QB: rating.pots.QB,
                        RB: rating.pots.RB,
                        WR: rating.pots.WR,
                        TE: rating.pots.TE,
                        OL: rating.pots.OL,
                        DL: rating.pots.DL,
                        LB: rating.pots.LB,
                        CB: rating.pots.CB,
                        S: rating.pots.S,
                        K: rating.pots.K,
                        P: rating.pots.P
                    }
                };
                return mappedRating;
            })),
            salaries: await Promise.all(p.salaries.map((salary: any) => ({
                player_id: p.pid,
                season: salary.season,
                amount: salary.amount
            })))
        };

        return player;
    }

    generateRatings(p: any) {
        const pos = p.pos;
        let rawRatings: any = {};
        let ratings: any = {};

        // rawRatings.overall = 0;
        // rawRatings.potential = 0;
        // rawRatings.fuzz = 0;
        // rawRatings.position = '';
        rawRatings.position_archetype = '';
        rawRatings.mental_archetype = '';

        const excludedAttributes = ['id', 'pid', 'position', 'position_archetype', 'mental_archetype'];

        // for (let key in Ratings.fields()) {
        //     if (!excludedAttributes.includes(key)) {
        //         rawRatings[key] = this.initialRating();
        //     }
        // }
    
        const position_archetype = this.getArchetypeByPosition(pos);
        const mental_archetype = this.getMentalArchetype();
        const ratingsToBoost = this.getRatingsBoostByPosition(mental_archetype, position_archetype);
    
        // rawRatings.position = pos;
        rawRatings.position_archetype = position_archetype;
        rawRatings.mental_archetype = mental_archetype;
        rawRatings = this.boundRatingsByPosition(rawRatings, pos, mental_archetype, position_archetype, ratingsToBoost);

        for (let key in rawRatings) {
            ratings[key] = rawRatings[key];
        }
    
        return ratings;
    }
    
    getPosition() {
        const numPlayers = Object.values(MAX_POSITION_COUNTS).reduce((sum, val) => sum + val, 0);
        const rand = Math.random() * numPlayers;
        let cumsum = 0;

        for (let i = 0; i < POSITIONS.length; i++) {
            cumsum += MAX_POSITION_COUNTS[POSITIONS[i]];

            if (rand < cumsum) {
                return POSITIONS[i];
            }
        }

        throw new Error("No position found - this should never happen!");
    }

    getArchetypeByPosition(pos: string) {
        const archetypes = POSITION_ARCHETYPES[pos];
        if (!archetypes) {
            throw new Error(`No archetypes found for position: ${pos}`);
        }
        const randomIndex = Math.floor(Math.random() * archetypes.length);
        return archetypes[randomIndex];
    }

    getMentalArchetype() {
        const keys = Object.keys(MENTAL_ARCHETYPES);
        const randomIndex = Math.floor(Math.random() * keys.length);
        const randomKey = keys[randomIndex];
        return randomKey;
    }
    
    initialRating() {
        const rating = this.limitRating(Utilities.truncGauss(10, 10, 0, 40));
        return rating;
    }

    limitRating(rating: number) {
        if (rating > 100) {
            return 100;
        }
        if (rating < 0) {
            return 0;
        }

        return Math.floor(rating);
    }

    getRatingsBoostByPosition(mental: string, technical: string) {
        let tech: String = technical;
        let ment: String = mental;
        
        return {
            ...TECHNICAL_ARCHETYPES[tech],
            ...MENTAL_ARCHETYPES[ment]
        }
    }

    boundRatingsByPosition(rawRatings: Ratings, pos: string, position_archetype: string, mental_archetype: string, ratingsToBoost: object) {
        for (const rating of Utilities.keys(ratingsToBoost)) {
            const factor = ratingsToBoost[rating];
            if (factor !== undefined) {
                rawRatings[rating] = this.limitRating(
                    (rawRatings[rating] += factor * Utilities.truncGauss(30, 60, 30, 90)),
                );
            }
        }
    
        if (pos !== "K" && pos !== "P" && Math.random() < 0.95) {
            rawRatings.kick_power = Utilities.randInt(0, 30);
            rawRatings.kick_accuracy = Utilities.randInt(0, 30);
            rawRatings.punt_power = Utilities.randInt(0, 30);
            rawRatings.punt_accuracy = Utilities.randInt(0, 30);
        }

        if (pos === "QB") {
            rawRatings.throw_power = Utilities.bound(rawRatings.throw_power, 90, Infinity);
            rawRatings.throw_accuracy_short = Utilities.bound(rawRatings.throw_accuracy_short, 60, Infinity);
            rawRatings.vision = Utilities.bound(rawRatings.vision, 150, Infinity);

            let mid_max = rawRatings.throw_accuracy_short - Utilities.randInt(0, 30);
            let mid_min = mid_max - Utilities.randInt(0, 30);
            if (mid_max < mid_min ) {
                mid_max = mid_min + Utilities.randInt(0, 30);
            }
            rawRatings.throw_accuracy_mid = Utilities.bound(rawRatings.throw_accuracy_mid, mid_min, mid_max);

            let deep_max = rawRatings.throw_accuracy_mid - Utilities.randInt(0, 30);
            let deep_min = deep_max - Utilities.randInt(0, 30);
            if (deep_max < deep_min ) {
                deep_max = deep_min + Utilities.randInt(15, 60);
            }
            rawRatings.throw_accuracy_deep = Utilities.bound(rawRatings.throw_accuracy_deep, deep_min, deep_max);
        }
    
        if (pos === "RB") {
            rawRatings.agility = Utilities.bound(rawRatings.agility, 150, Infinity);
            rawRatings.speed = Utilities.bound(rawRatings.speed, 150, Infinity);
            rawRatings.acceleration = Utilities.bound(rawRatings.acceleration, 150, Infinity);
        }
    
        if (pos === "WR") {
            rawRatings.short_route_running = Utilities.bound(rawRatings.short_route_running, 150, Infinity);
            rawRatings.medium_route_running = Utilities.bound(rawRatings.medium_route_running, 150, Infinity);
            rawRatings.deep_route_running = Utilities.bound(rawRatings.deep_route_running, 150, Infinity);
            rawRatings.catching = Utilities.bound(rawRatings.catching, 150, Infinity);
        }
    
        if (pos === "TE") {
            rawRatings.strength = Utilities.bound(rawRatings.strength, 120, Infinity);
            rawRatings.run_blocking = Utilities.bound(rawRatings.run_blocking, 90, Infinity);
        }
    
        if (pos === "OT" || pos === "OG" || pos === "C") {
            rawRatings.strength = Utilities.bound(rawRatings.strength, 180, Infinity);
            rawRatings.run_blocking = Utilities.bound(rawRatings.run_blocking, 120, Infinity);
            rawRatings.pass_blocking = Utilities.bound(rawRatings.pass_blocking, 120, Infinity);
            rawRatings.pass_block_power = Utilities.bound(rawRatings.pass_block_power, 120, Infinity);
            rawRatings.run_block_power = Utilities.bound(rawRatings.run_block_power, 120, Infinity);
            rawRatings.pass_block_finesse = Utilities.bound(rawRatings.pass_block_finesse, 120, Infinity);
            rawRatings.run_block_finesse = Utilities.bound(rawRatings.run_block_finesse, 120, Infinity);
        }
    
        if (pos === "DE") {
            rawRatings.strength= Utilities.bound(rawRatings.strength, 180, Infinity);
            rawRatings.tackle = Utilities.bound(rawRatings.tackle, 120, Infinity);
            rawRatings.shed_block = Utilities.bound(rawRatings.shed_block, 120, Infinity);
        }

        if (pos === "DT") {
            rawRatings.strength= Utilities.bound(rawRatings.strength, 180, Infinity);
            rawRatings.tackle = Utilities.bound(rawRatings.tackle, 120, Infinity);
            rawRatings.shed_block = Utilities.bound(rawRatings.shed_block, 120, Infinity);
        }
    
        if (pos === "OLB") {
            rawRatings.tackle = Utilities.bound(rawRatings.tackle, 150, Infinity);
            rawRatings.strength= Utilities.bound(rawRatings.strength, 120, Infinity);
        }

        if (pos === "MLB") {
            rawRatings.tackle = Utilities.bound(rawRatings.tackle, 150, Infinity);
            rawRatings.strength= Utilities.bound(rawRatings.strength, 120, Infinity);
        }
    
        if (pos === "CB") {
            rawRatings.speed = Utilities.bound(rawRatings.speed, 180, Infinity);
        }
    
        if (pos === "S") {
            rawRatings.speed = Utilities.bound(rawRatings.speed, 150, Infinity);
        }

        return rawRatings;
    }

    generatePlayerName() {
        let names = {
            first_name: faker.name.firstName('male'),
            last_name: faker.name.lastName('male'),
        }

        return names;
    }
}
