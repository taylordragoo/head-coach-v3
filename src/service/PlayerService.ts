import IPlayer from '@/interfaces/Player';
import Ratings from '@/models/Ratings';
import IRating from '@/interfaces/IRating';
import Overalls from '@/models/Overalls';
import Potentials from '@/models/Potentials';
import faker from 'faker';
import data from '@/data/colleges.json';
import players from '@/data/players.json';
import profiles from '@/data/profiles.json';
import Utilities from '@/utils/utilities';
import { MIN_POSITION_COUNTS, MAX_POSITION_COUNTS, POSITIONS, POSITION_ARCHETYPES, TECHNICAL_ARCHETYPES, MENTAL_ARCHETYPES } from '@/data/constants';

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

export default class PlayerService {
    private static instance: PlayerService;

    constructor() {}

    public static getInstance(): PlayerService {
        if (!PlayerService.instance) {
            PlayerService.instance = new PlayerService();
        }

        return PlayerService.instance;
    }

    handleGeneratePlayer(p: any) {
        let player: IPlayer = {}
        player.team_id = p.team_id;
        let name = this.generatePlayerName();
        player.first_name = name.first_name;
        player.last_name = name.last_name;
        player.ratings = this.generateRatings(p);

        return player;
    }

    generateRatings(p: any) {
        let ratings = new Ratings;
        const pos = p.pos;

        let rawRatings: IRating = {
            position: '',
            position_archetype: '',
            mental_archetype: '',
            carrying: this.initialRating(),
			catching: this.initialRating(),
			kick_accuracy: this.initialRating(),
			kick_power: this.initialRating(),
			man_coverage: this.initialRating(),
			pass_blocking: this.initialRating(),
			play_action: this.initialRating(),
			punt_accuracy: this.initialRating(),
			punt_power: this.initialRating(),
			route_running: this.initialRating(),
			run_blocking: this.initialRating(),
			shed_block: this.initialRating(),
			tackle: this.initialRating(),
			throw_accuracy_deep: this.initialRating(),
			throw_accuracy_mid: this.initialRating(),
			throw_accuracy_short: this.initialRating(),
			throw_on_the_run: this.initialRating(),
			throw_power: this.initialRating(),
			zone_coverage: this.initialRating(),
			aggresion: this.initialRating(),
			aniticipation: this.initialRating(),
			bravery: this.initialRating(),
			composure: this.initialRating(),
			concentration: this.initialRating(),
			decisions: this.initialRating(),
			determination: this.initialRating(),
			flair: this.initialRating(),
			leadership: this.initialRating(),
			off_the_ball: this.initialRating(),
			positioning: this.initialRating(),
			teamwork: this.initialRating(),
			vision: this.initialRating(),
			work_rate: this.initialRating(),
			speed: this.initialRating(),
			acceleration: this.initialRating(),
			agility: this.initialRating(),
			strength: this.initialRating(),
			vertical: this.initialRating(),
			stamina: this.initialRating(),
        }

        const position_archetype = this.getArchetypeByPosition(pos);
        const mental_archetype = this.getMentalArchetype();
        const ratingsToBoost = this.getRatingsBoostByPosition(mental_archetype, position_archetype);

        rawRatings.position = pos;
        rawRatings.position_archetype = position_archetype;
        rawRatings.mental_archetype = mental_archetype;
        rawRatings = this.boundRatingsByPosition(rawRatings, pos, mental_archetype, position_archetype, ratingsToBoost);

        // @ts-ignore
        ratings = {
            position: pos,
            position_archetype: position_archetype,
            mental_archetype: mental_archetype,
            // Technical
			carrying: rawRatings.carrying,
			catching: rawRatings.catching,
			kick_accuracy: rawRatings.kick_accuracy,
			kick_power: rawRatings.kick_power,
			man_coverage: rawRatings.man_coverage,
			pass_blocking: rawRatings.pass_blocking,
			play_action: rawRatings.play_action,
			punt_accuracy: rawRatings.punt_accuracy,
			punt_power: rawRatings.punt_power,
			route_running: rawRatings.route_running,
			run_blocking: rawRatings.run_blocking,
			shed_block: rawRatings.shed_block,
			tackle: rawRatings.tackle,
			throw_accuracy_deep: rawRatings.throw_accuracy_deep,
			throw_accuracy_mid: rawRatings.throw_accuracy_mid,
			throw_accuracy_short: rawRatings.throw_accuracy_short,
			throw_on_the_run: rawRatings.throw_on_the_run,
			throw_power: rawRatings.throw_power,
			zone_coverage: rawRatings.zone_coverage,
            // Mental
			aggresion: rawRatings.aggresion,
			aniticipation: rawRatings.aniticipation,
			bravery: rawRatings.bravery,
			composure: rawRatings.composure,
			concentration: rawRatings.concentration,
			decisions: rawRatings.decisions,
			determination: rawRatings.determination,
			flair: rawRatings.flair,
			leadership: rawRatings.leadership,
			off_the_ball: rawRatings.off_the_ball,
			positioning: rawRatings.positioning,
			teamwork: rawRatings.teamwork,
			vision: rawRatings.vision,
			work_rate: rawRatings.work_rate,
            // Physical
			speed: rawRatings.speed,
			acceleration: rawRatings.acceleration,
			agility: rawRatings.agility,
			strength: rawRatings.strength,
			vertical: rawRatings.vertical,
			stamina: rawRatings.stamina
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
        return this.limitRating(Utilities.truncGauss(10, 20, 10, 40));
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

    boundRatingsByPosition(rawRatings: IRating, pos: string, position_archetype: string, mental_archetype: string, ratingsToBoost: object) {
        for (const rating of Utilities.keys(ratingsToBoost)) {
            const factor = ratingsToBoost[rating];
            if (factor !== undefined) {
                rawRatings[rating] = this.limitRating(
                    (rawRatings[rating] += factor * Utilities.truncGauss(10, 20, 10, 30)),
                );
            }
        }
    
        if (pos !== "K" && pos !== "P" && Math.random() < 0.95) {
            rawRatings.kick_power = Utilities.randInt(0, 10);
            rawRatings.kick_accuracy = Utilities.randInt(0, 10);
            rawRatings.punt_power = Utilities.randInt(0, 10);
            rawRatings.punt_accuracy = Utilities.randInt(0, 10);
        }

        if (pos === "QB") {
            rawRatings.throw_power = Utilities.bound(rawRatings.throw_power, 30, Infinity);
            rawRatings.throw_accuracy_short = Utilities.bound(rawRatings.throw_accuracy_short, 20, Infinity);
            rawRatings.vision = Utilities.bound(rawRatings.vision, 50, Infinity);

            let mid_max = rawRatings.throw_accuracy_short - Utilities.randInt(1, 10);
            let mid_min = mid_max - Utilities.randInt(1, 10);
            if (mid_max < mid_min ) {
                mid_max = mid_min + Utilities.randInt(1, 10);
            }
            rawRatings.throw_accuracy_mid = Utilities.bound(rawRatings.throw_accuracy_mid, mid_min, mid_max);

            let deep_max = rawRatings.throw_accuracy_mid - Utilities.randInt(1, 10);
            let deep_min = deep_max - Utilities.randInt(1, 10);
            if (deep_max < deep_min ) {
                deep_max = deep_min + Utilities.randInt(5, 20);
            }
            rawRatings.throw_accuracy_deep = Utilities.bound(rawRatings.throw_accuracy_deep, deep_min, deep_max);
        }
    
        if (pos === "RB") {
            rawRatings.agility = Utilities.bound(rawRatings.agility, 50, Infinity);
            rawRatings.speed = Utilities.bound(rawRatings.speed, 50, Infinity);
            rawRatings.acceleration = Utilities.bound(rawRatings.acceleration, 50, Infinity);
        }
    
        if (pos === "WR") {
            rawRatings.route_running = Utilities.bound(rawRatings.route_running, 50, Infinity);
            rawRatings.catching = Utilities.bound(rawRatings.catching, 50, Infinity);
        }
    
        if (pos === "TE") {
            rawRatings.strength = Utilities.bound(rawRatings.strength, 40, Infinity);
            rawRatings.run_blocking = Utilities.bound(rawRatings.run_blocking, 30, Infinity);
        }
    
        if (pos === "OT" || pos === "OG" || pos === "C") {
            rawRatings.strength = Utilities.bound(rawRatings.strength, 60, Infinity);
            rawRatings.run_blocking = Utilities.bound(rawRatings.run_blocking, 40, Infinity);
            rawRatings.pass_blocking = Utilities.bound(rawRatings.pass_blocking, 40, Infinity);
        }
    
        if (pos === "DE") {
            rawRatings.strength= Utilities.bound(rawRatings.strength, 60, Infinity);
            rawRatings.tackle = Utilities.bound(rawRatings.tackle, 40, Infinity);
            rawRatings.shed_block = Utilities.bound(rawRatings.shed_block, 40, Infinity);
        }

        if (pos === "DT") {
            rawRatings.strength= Utilities.bound(rawRatings.strength, 60, Infinity);
            rawRatings.tackle = Utilities.bound(rawRatings.tackle, 40, Infinity);
            rawRatings.shed_block = Utilities.bound(rawRatings.shed_block, 40, Infinity);
        }
    
        if (pos === "OLB") {
            rawRatings.tackle = Utilities.bound(rawRatings.tackle, 50, Infinity);
            rawRatings.strength= Utilities.bound(rawRatings.strength, 40, Infinity);
        }

        if (pos === "MLB") {
            rawRatings.tackle = Utilities.bound(rawRatings.tackle, 50, Infinity);
            rawRatings.strength= Utilities.bound(rawRatings.strength, 40, Infinity);
        }
    
        if (pos === "CB") {
            rawRatings.speed = Utilities.bound(rawRatings.speed, 60, Infinity);
        }
    
        if (pos === "S") {
            rawRatings.speed = Utilities.bound(rawRatings.speed, 50, Infinity);
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
