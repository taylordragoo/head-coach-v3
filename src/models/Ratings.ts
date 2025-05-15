import { Model } from '@vuex-orm/core'
import { POSITION_ARCHETYPES_DISPLAY_NAMES, MENTAL_ARCHETYPES_DISPLAY_NAMES } from '@/data/constants';
import Player from '@/models/Player';

// Physical
// "hgt"
// "stre"
// "spd"
// "endu"
// Throwing
// "thv"
// "thp"
// "tha"
// Ballcarrier
// "bsc"
// "elu"
// Receiving
// "rtr"
// "hnd"
// Blocking
// "rbk"
// "pbk"
// Defensive
// "pcv"
// "tck"
// "prs"
// "rns"
// Kicking
// "kpw"
// "kac"
// "ppw"
// "pac"

export default class Ratings extends Model {
	static entity = 'ratings'

	static fields () {
		return {
			id: this.attr(null),
			player_id: this.attr(null),
			position: this.string(''),
			position_archetype: this.string(''),
			mental_archetype: this.string(''),
			overall: this.number(null),
			potential: this.number(null),
			fuzz: this.number(null),
            season: this.number(null),
			// Mental
			anticipation: this.number(null),
			composure: this.number(null),
			concentration: this.number(null),
			decisions: this.number(null),
			determination: this.number(null),
			leadership: this.number(null),
			teamwork: this.number(null),
			work_rate: this.number(null),
			// Physical
			speed: this.number(null),
			acceleration: this.number(null),
			agility: this.number(null),
			strength: this.number(null),
			vertical: this.number(null),
			stamina: this.number(null),
			// Throwing
			throw_accuracy_deep: this.number(null),
			throw_accuracy_mid: this.number(null),
			throw_accuracy_short: this.number(null),
			throw_on_the_run: this.number(null),
			throw_power: this.number(null),
			play_action: this.number(null),
			// Ballcarrier
			carrying: this.number(null),
			break_tackle: this.number(null),
			stiff_arm: this.number(null),
			spin_move: this.number(null),
			trucking: this.number(null),
			juking: this.number(null),
			// Receiving
			short_route_running: this.number(null),
			medium_route_running: this.number(null),
			deep_route_running: this.number(null),
			catching: this.number(null),
			release: this.number(null),
			catch_in_traffic: this.number(null),
			// Blocking
			run_blocking: this.number(null),
			pass_blocking: this.number(null),
			run_block_power: this.number(null),
			pass_block_power: this.number(null),
			run_block_finesse: this.number(null),
			pass_block_finesse: this.number(null),
			// Defensive
			shed_block: this.number(null),
			tackle: this.number(null),
			hit_power: this.number(null),
			play_recognition: this.number(null),
			pursuit: this.number(null),
			man_coverage: this.number(null),
			zone_coverage: this.number(null),
			press: this.number(null),
			// Kicking
			kick_accuracy: this.number(null),
			kick_power: this.number(null),
			punt_accuracy: this.number(null),
			punt_power: this.number(null),

            // player: this.belongsTo(Player, 'player_id')
		}
	}

    declare id: string
	declare player_id: string
	declare position: string
	declare position_archetype: string
	declare mental_archetype: string
	declare season: string

    declare overall: number
    declare potential: number
    declare fuzz: number

    // // Mental
    declare aggression: number
    declare anticipation: number
    declare bravery: number
    declare composure: number
    declare concentration: number
    declare decisions: number
    declare determination: number
    declare flair: number
    declare leadership: number
    declare off_the_ball: number
    declare positioning: number
    declare teamwork: number
    declare vision: number
    declare work_rate: number

	// // Physical
	declare acceleration: number
	declare speed: number
	declare stamina: number
	declare strength: number
    declare vertical: number
    declare agility: number

	// // Throwing
	declare throw_accuracy_short: number
	declare throw_power: number
	declare play_action: number
    declare throw_accuracy_mid: number
    declare throw_accuracy_deep: number
    declare throw_on_the_run: number

	// // Ballcarrier
	declare carrying: number
	declare break_tackle: number
    declare stiff_arm: number
    declare spin_move: number
    declare trucking: number
    declare juking: number

	// // Receiving
	declare short_route_running: number
	declare catching: number
	declare release: number
    declare catch_in_traffic: number
    declare medium_route_running: number
    declare deep_route_running: number

	// // Blocking
	declare pass_blocking: number
	declare run_blocking: number
    declare run_block_power: number
    declare pass_block_power: number
    declare run_block_finesse: number
    declare pass_block_finesse: number

	// // Defensive
	declare shed_block: number
	declare tackle: number
	declare zone_coverage: number
	declare man_coverage: number
	declare press: number
    declare hit_power: number
    declare play_recognition: number
    declare pursuit: number

	// // Kicking
	declare kick_accuracy: number
	declare kick_power: number
	declare punt_accuracy: number
	declare punt_power: number

	get position_archetype_name () {
        return POSITION_ARCHETYPES_DISPLAY_NAMES[this.position_archetype]
    }

	get mental_archetype_name () {
		return MENTAL_ARCHETYPES_DISPLAY_NAMES[this.mental_archetype]
	}

	get overall_rating () {
        switch (this.position) {
            case 'QB':
                return this.calculatePassingRating();
            case 'RB':
                return this.calculateBallCarrierRating();
			case 'WR':
				return this.calculateBallCarrierRating();
			case 'TE':
				return this.calculateBallCarrierRating();
			case 'OT':
				return this.calculateBallCarrierRating();
			case 'OG':
				return this.calculateBallCarrierRating();
			case 'C':
				return this.calculateBallCarrierRating();
			case 'DE':
				return this.calculateBallCarrierRating();
			case 'DT':
				return this.calculateBallCarrierRating();
			case 'OLB':
				return this.calculateBallCarrierRating();
			case 'MLB':
				return this.calculateBallCarrierRating();
			case 'CB':
				return this.calculateBallCarrierRating();
			case 'S':
				return this.calculateBallCarrierRating();
			case 'K':
				return this.calculateBallCarrierRating();
			case 'P':
            default:
                return 0;
        }
    }

	private calculatePassingRating() {
        return Math.round(40 + (
            (
                (this.throw_power * 0.25) + 
				(this.throw_accuracy_deep * 0.25) + 
				(this.throw_accuracy_mid * 0.1) + 
				(this.throw_accuracy_short * 0.1) +
				(this.throw_on_the_run * 0.1) + 
				(this.play_action * 0.1) + 
				(this.agility * 0.1)
            ) / 300) * 60
        );
    }

    private calculateBallCarrierRating() {
        return Math.round(40 + (
            (
                (this.carrying * 0.25) + 
                (this.break_tackle * 0.25) + 
                (this.speed * 0.25) + 
                (this.agility * 0.25)
            ) / 300) * 60
        );
    }
}
