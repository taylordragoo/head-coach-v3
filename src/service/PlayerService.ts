import Player from '@/models/Player';
import Ratings from '@/models/Ratings';
import IRating from '@/interfaces/IRating';
import Overalls from '@/models/Overalls';
import Potentials from '@/models/Potentials';
import * as faker from 'faker';
import data from '@/data/colleges.json';
import players from '@/data/players.json';
import profiles from '@/data/profiles.json';
import Utilities from '@/utils/utilities';
import { MIN_POSITION_COUNTS, MAX_POSITION_COUNTS, POSITIONS, POSITION_ARCHETYPES, TECHNICAL_ARCHETYPES, MENTAL_ARCHETYPES, POSITION_MAPPING } from '@/data/constants';

// Set general Min/Max Height and Weight for all players
// Determine position based on ratings
// Adjust actual Min/Max height and weight based on position
// Generate height and weight based on adjusted Min/Max using:
// player.height = Math.round(random.randInt(-2, 2) + player.ratings[0].stamina * (maxHgt - minHgt) / 100 + minHgt);
// player.weight = Math.round(random.randInt(-20, 20) + (player.ratings[0].stamina + 0.5 * p.ratings[0].stre) * (maxWeight - minWeight) / 150 + minWeight);
// Set nationality to USA
// Set Age and Location
// Determine player name based on nationality
// Generate Draft data for player
// Generate value and value fuzz
// Generate contract for player
// 0 = 20 = 40
// 50 = 30 = 50
// 100 = 40 = 60
// 150 = 50 = 70
// 200 = 60 = 80
// 250 = 70 = 90
// 300 = 80 = 100

export default class PlayerService {
    private static instance: PlayerService;

    constructor() {}

    public static getInstance(): PlayerService {
        if (!PlayerService.instance) {
            PlayerService.instance = new PlayerService();
        }

        return PlayerService.instance;
    }

    async handleGeneratePlayer(p: any) {
        // let player: IPlayer = {}
        let player = new Player();
        player.team_id = p.team_id;
        let name = this.generatePlayerName();
        player.first_name = name.first_name;
        player.last_name = name.last_name;
        player.ratings = this.generateRatings(p);
        player.position = [
            {
                position: p.pos
            }
        ];

        return player;
    }

    generateRatings(p: any) {
        const pos = p.pos;
        let rawRatings: any = {};
        let ratings: any = {};

        rawRatings.overall = 0;
        rawRatings.potential = 0;
        rawRatings.fuzz = 0;
        rawRatings.position = '';
        rawRatings.position_archetype = '';
        rawRatings.mental_archetype = '';

        for (let key in Ratings.fields()) {
            if (typeof (Ratings.fields() as any)[key].value === 'number') {
                rawRatings[key] = this.initialRating();
            }
        }
    
        const position_archetype = this.getArchetypeByPosition(pos);
        const mental_archetype = this.getMentalArchetype();
        const ratingsToBoost = this.getRatingsBoostByPosition(mental_archetype, position_archetype);
    
        rawRatings.position = pos;
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
            // @ts-ignore
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
        return this.limitRating(Utilities.truncGauss(30, 30, 0, 120));
    }

    limitRating(rating: number) {
        if (rating > 300) {
            return 300;
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
