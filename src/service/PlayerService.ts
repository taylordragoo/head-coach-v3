import { faker } from '@faker-js/faker';
import colleges from '@/data/colleges.json';
import Utilities from '@/utils/utilities';

import IPlayer from '@/interfaces/IPlayer';
import Person from '@/models/Person';
import User from '@/models/User';
import World from '@/models/World';
import League from '@/models/League';
import Team from '@/models/Team';
import Player from '@/models/Player';
import Match from "@/models/Match";
import Born from "@/models/Born";
import College from "@/models/College";
import Draft from "@/models/Draft";
import DepthChart from "@/models/DepthChart";
import Ratings from "@/models/Ratings";
import Health from "@/models/Health";
import Injury from "@/models/Injury";
import Salary from "@/models/Salary";
import Option from "@/models/Option";
import Stat from "@/models/Stat";
import Overalls from "@/models/Overalls";
import Potentials from "@/models/Potentials";
import Phase from "@/models/Phase";
import Contract from "@/models/Contract";
import Conference from "@/models/Conference";
import Division from "@/models/Division";
import Staff from "@/models/Staff";

import { TEAM_MAPPING, MIN_POSITION_COUNTS, MAX_POSITION_COUNTS, POSITIONS, POSITION_ARCHETYPES, TECHNICAL_ARCHETYPES, MENTAL_ARCHETYPES, POSITION_MAPPING, SECONDARY_POSITION_MAPPING } from '@/data/constants';

type DraftSlotKey = string;

export default class PlayerService {
    private static instance: PlayerService;
    private usedSlots: Record<DraftSlotKey, boolean> = {};

    public static getInstance(): PlayerService 
    {
        if (!PlayerService.instance) {
            PlayerService.instance = new PlayerService();
        }

        return PlayerService.instance;
    }

    public generatePlayer(data: Record<string, any>): object | null
    {
        try {
            let createdPerson = {
                first_name: data.firstName,
                last_name: data.lastName,
                height: data.height,
                weight: data.weight
            }

            const collegeName = data.college ?? null;
            
            let collegeId: number = 0;
            if (data.College) {
                const college = this.findOrCreateCollege(collegeName);
                collegeId = college ? college.id : 1;
            }

            // Get team_id from the mapping with a fallback value
            const teamId = TEAM_MAPPING[data.Team] ?? -1;

            let createdPlayer = {
                team_id: teamId,
                college_id: collegeId,
            }
            
            let generatedData = this.generatePlayerAssociatedData(data);
            // console.log(generatedData)
            return {
                person: {
                    ...createdPerson,
                    born: generatedData.born,
                    player: {
                        ...createdPlayer,
                        ratings: generatedData.ratings,
                        health: generatedData.health,
                        draft: generatedData.draft,
                        contract: generatedData.contract
                    }
                },
            };
        
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    private generatePlayerAssociatedData(data: Record<string, any>)
    {
        try {
            let ratings = this.generatePlayerRatings(data);
            let born = this.generatePlayerBorn(data);
            let draft = this.generatePlayerDraft(data);
            let contract = this.generatePlayerContract(data);
            let health = this.generatePlayerHealth(data);

            return {
                ratings,
                born,
                draft,
                contract,
                health
            }

        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    private generatePlayerRatings(data: Record<string, any>)
    {
        try {
            data =  [{
                position: data.Position ?? "ATH",
                overall: data.Overall ?? 50,
                potential: data.Overall ?? 50,
                season: "2025",
                position_archetype: this.getArchetypeByPosition(data.Position ?? "QB"),
                mental_archetype: this.getMentalArchetype(),
                // Mental attributes
                anticipation: data.playRecognition ?? 50,
                composure: data.awareness ?? 50,
                concentration: data.awareness ?? 50,
                decisions: data.bCVision ?? 50,
                determination: data.awareness ?? 50,
                leadership: data.finesseMoves ?? 50,
                teamwork: data.awareness ?? 50,
                work_rate: data.toughness ?? 50,
                // Physical attributes
                speed: data.speed ?? 50,
                acceleration: data.acceleration ?? 50,
                agility: data.agility ?? 50,
                strength: data.strength ?? 50,
                vertical: data.jumping ?? 50,
                stamina: data.stamina ?? 50,
                // Throwing attributes
                throw_power: data.throwPower ?? 50,
                throw_accuracy_short: data.throwAccuracyShort ?? 50,
                throw_accuracy_mid: data.throwAccuracyMid ?? 50,
                throw_accuracy_deep: data.throwAccuracyDeep ?? 50,
                throw_on_the_run: data.throwOnTheRun ?? 50,
                play_action: data.playAction ?? 50,
                // Ballcarrier attributes
                carrying: data.Carrying ?? 50,
                break_tackle: data.breakTackle ?? 50,
                stiff_arm: data.stiffArm ?? 50,
                spin_move: data.spinMove ?? 50,
                trucking: data.trucking ?? 50,
                juking: data.jukeMove ?? 50,
                // Receiving attributes
                short_route_running: data.shortRouteRunning ?? 50,
                medium_route_running: data.mediumRouteRunning ?? 50,
                deep_route_running: data.deepRouteRunning ?? 50,
                catching: data.catching ?? 50,
                release: data.release ?? 50,
                catch_in_traffic: data.catchInTraffic ?? 50,
                // Blocking attributes
                run_blocking: data.runBlock ?? 50,
                pass_blocking: data.passBlock ?? 50,
                run_block_power: data.runBlockPower ?? 50,
                pass_block_power: data.passBlockPower ?? 50,
                run_block_finesse: data.runBlockFinesse ?? 50,
                pass_block_finesse: data.passBlockFinesse ?? 50,
                // Defensive attributes
                shed_block: data.shedBlock ?? 50,
                tackle: data.tackle ?? 50,
                hit_power: data.hitPower ?? 50,
                play_recognition: data.playRecognition ?? 50,
                pursuit: data.pursuit ?? 50,
                man_coverage: data.manCoverage ?? 50,
                zone_coverage: data.zoneCoverage ?? 50,
                press: data.awareness ?? 50,
                // Kicking attributes
                kick_power: data.kickPower ?? 50,
                kick_accuracy: data.kickAccuracy ?? 50,
                punt_power: data.puntPower ?? 50,
                punt_accuracy: data.puntAccuracy ?? 50
            }];

            return data

        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    private findOrCreateCollege(collegeName: string | null): College | null 
    {
        try {
            if (!collegeName) {
                return null;
            }
            
            let college: College | null = College.query().where("region", collegeName).first();
            if (college) {
                return college
            }

            return null
            
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    private generatePlayerBorn(data: Record<string, any>)
    {
        try {
            let birthdate = data.birthdate ?? null;
            let date: Date;

            if (!birthdate) {
                const age = data.Age ?? 25;
                date = new Date();
                date.setFullYear(date.getFullYear() - age);
                date.setDate(date.getDate() - Math.floor(Math.random() * 365));
            } else {
                try {
                    const parts = birthdate.split("/");
                    date = new Date(parseInt("20" + parts[2]), parseInt(parts[0]) - 1, parseInt(parts[1]));
                    
                    if (isNaN(date.getTime())) {
                        throw new Error("Invalid date format");
                    }
                } catch (e) {
                    try {
                        date = new Date(birthdate);
                        
                        if (isNaN(date.getTime())) {
                            throw new Error("Invalid date format");
                        }
                    } catch (e) {
                        const age = data.Age ?? 25;
                        date = new Date();
                        date.setFullYear(date.getFullYear() - age);
                        date.setDate(date.getDate() - Math.floor(Math.random() * 365));
                    }
                }
            }

            data = {
                birthdate: date,
                location: `${faker.location.city()}, ${faker.location.state()}`
            }

            return data;

        } catch (error: any) {
            console.error("Failed to process birthdate for player:", error.message);
            
            const age = data.Age ?? 25;
            const date = new Date();
            date.setFullYear(date.getFullYear() - age);
            date.setDate(date.getDate() - Math.floor(Math.random() * 365));
        
            data = {
                birthdate: date,
                location: `${faker.location.city()}, ${faker.location.state()}`
            }

            return data;
        }
    }

    /**
     * Generates a draft record for a player.
     */
    public generatePlayerDraft(data: Record<string, any>): Record<string, any>
    {
        try {
            const age = typeof data["Age"] === "number" ? data["Age"] as number : 25;
            const draftYear = this.calculateDraftYear(age);

            const overall = typeof data["Overall"] === "number" ? data["Overall"] as number : 70;
            const draftPosition = this.generateDraftPosition(overall, draftYear);

            data = {
                year: draftPosition.year,
            }

            return data

        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    /**
     * Generate contract and related salaries for a player.
     * @param personId The ID of the person.
     * @param data Player data.
     * @param isRookie Whether this player is a rookie.
     */
    private generatePlayerContract(data: Record<string, any>, isRookie: boolean = false): Record<string, any>
    {
        try {
            // Determine contract length and base values
            const contractLength: number = isRookie ? 4 : Math.floor(Math.random() * 5) + 1;
            const currentYear: number = new Date().getFullYear();
            const baseAmount: number = this.calculateContractAmount(data);
            
            // Build salary entries for each year
            const salaries = [];
            for (let year = 0; year < contractLength; year++) {
                const salaryData = {
                    amount: this.calculateYearlyAmount(baseAmount, year, contractLength, isRookie),
                    season: currentYear + year,
                    option: null
                };
                
                // Add options for longer contracts
                if (!isRookie && contractLength >= 4 && year === 3) {
                    salaryData.option = "team";
                }
                
                if (!isRookie && contractLength === 5 && year === 4) {
                    salaryData.option = "player";
                }
                
                salaries.push(salaryData);
            }
            
            // Return the full contract data
            return {
                type: "player",
                amount: baseAmount,
                expires: currentYear + contractLength,
                salaries
            };

        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    private generatePlayerHealth(data: Record<string, any>): Record<string, any>
    {
        try {
            let data = {
                status: 'healthy'
            }

            return data;

        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    /**
     * Checks if a draft slot is already taken.
     */
    private isSlotTaken(year: number, round: number, pick: number): boolean 
    {
        const key = `${year}-${round}-${pick}`;
        return !!this.usedSlots[key];
    }

    /**
     * Reserves a draft slot.
     */
    private reserveSlot(year: number, round: number, pick: number): void 
    {
        const key = `${year}-${round}-${pick}`;
        this.usedSlots[key] = true;
    }

    /**
     * Finds the next available pick in a given round/year.
     */
    private findNextAvailablePick(year: number, round: number): number 
    {
        let pick = 1;
        while (this.isSlotTaken(year, round, pick)) {
            pick++;
        }
        return pick;
    }

    /**
     * Calculates the draft year based on age.
     */
    private calculateDraftYear(age: number): number 
    {
        const currentYear = new Date().getFullYear();
        const birthYear = currentYear - age;
        const typicalDraftAge = Math.floor(Math.random() * 3) + 21; // 21-23
        const draftYear = birthYear + typicalDraftAge;
        return Math.min(draftYear, currentYear - 1);
    }

    /**
     * Generates draft position (round, pick, year) for a player.
     */
    private generateDraftPosition(overall: number, draftYear: number): { round: number; pick: number; year: number } 
    {
        let round = 1;
        if (overall < 70) round = 2;
        if (overall < 65) round = 3;
        if (overall < 60) round = 4;
        if (overall < 55) round = 5;
        if (overall < 50) round = 6;
        if (overall < 45) round = 7;

        const pick = this.findNextAvailablePick(draftYear, round);
        this.reserveSlot(draftYear, round, pick);

        return { round, pick, year: draftYear };
    }

    /**
     * Calculate contract base amount based on player attributes.
     * @param data Player data.
     * @returns The contract amount.
     */
    private calculateContractAmount(data: Record<string, unknown>): number 
    {
        // Base amount on overall rating
        const overall: number = typeof data["Overall"] === "number" ? (data["Overall"] as number) : 70;

        // Base contract values by overall rating
        const baseValues: Record<number, number> = {
            90: 30000000, // Superstar
            80: 20000000, // Star
            70: 10000000, // Starter
            60: 5000000,  // Backup
            50: 1000000,  // Depth
            0: 750000     // Minimum
        };

        // Find the appropriate base value
        let baseValue = 750000; // Minimum contract
        for (const ratingThreshold of Object.keys(baseValues).map(Number).sort((a, b) => b - a)) {
            if (overall >= ratingThreshold) {
            baseValue = baseValues[ratingThreshold];
            break;
            }
        }

        // Add some randomness (±15%)
        const randomFactor = (Math.floor(Math.random() * 31) + 85) / 100; // 0.85 to 1.15
        return Math.round(baseValue * randomFactor * 100) / 100;
    }

    /**
     * Calculate yearly amount for a specific contract year.
     * @param baseAmount The base contract amount.
     * @param year The year index (0-based).
     * @param contractLength Total contract length.
     * @param isRookie Whether this is a rookie contract.
     * @returns The amount for this year.
     */
    private calculateYearlyAmount(baseAmount: number, year: number, contractLength: number, isRookie: boolean): number 
    {
        let factor: number;
        if (isRookie) {
            // Rookie contracts have a predetermined scale
            const rookieScales: number[] = [1.0, 1.15, 1.30, 1.45]; // Each year increases by 15%
            factor = rookieScales[year] ?? 1.0;
        } else {
            // Regular contracts typically increase by 5-10% per year
            factor = 1 + (year * (Math.floor(Math.random() * 6) + 5) / 100); // 5-10% per year
        }
        return Math.round(baseAmount * factor * 100) / 100;
    }

    private getArchetypeByPosition(pos: string) 
    {
        const archetypes = POSITION_ARCHETYPES[pos];
        if (!archetypes) {
            throw new Error(`No archetypes found for position: ${pos}`);
        }
        const randomIndex = Math.floor(Math.random() * archetypes.length);
        return archetypes[randomIndex];
    }

    private getMentalArchetype() 
    {
        const keys = Object.keys(MENTAL_ARCHETYPES);
        const randomIndex = Math.floor(Math.random() * keys.length);
        const randomKey = keys[randomIndex];
        return randomKey;
    }

    generateRatings(p: any) 
    {
        const pos = p.pos;
        let rawRatings: any = {};
        let ratings: any = {};

        rawRatings.overall = 0;
        rawRatings.potential = 0;
        rawRatings.fuzz = 0;
        rawRatings.position = '';
        rawRatings.position_archetype = '';
        rawRatings.mental_archetype = '';

        const excludedAttributes = ['id', 'pid', 'position', 'position_archetype', 'mental_archetype'];

        for (let key in Ratings.fields()) {
            if (!excludedAttributes.includes(key)) {
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
    
    getPosition() 
    {
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
    
    initialRating() 
    {
        const rating = this.limitRating(Utilities.truncGauss(10, 10, 0, 40));
        return rating;
    }

    limitRating(rating: number) 
    {
        if (rating > 100) {
            return 100;
        }
        if (rating < 0) {
            return 0;
        }

        return Math.floor(rating);
    }

    getRatingsBoostByPosition(mental: string, technical: string) 
    {
        let tech: String = technical;
        let ment: String = mental;
        
        return {
            ...TECHNICAL_ARCHETYPES[tech],
            ...MENTAL_ARCHETYPES[ment]
        }
    }

    boundRatingsByPosition(rawRatings: Ratings, pos: string, position_archetype: string, mental_archetype: string, ratingsToBoost: object) 
    {
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

    generatePlayerName() 
    {
        let names = {
            first_name: faker.name.firstName('male'),
            last_name: faker.name.lastName('male'),
        }

        return names;
    }
}
