import { Model } from '@vuex-orm/core'
import { POSITION_ARCHETYPES_DISPLAY_NAMES, MENTAL_ARCHETYPES_DISPLAY_NAMES } from '@/data/constants';

class Ratings extends Model {
	static entity = 'ratings'

	static fields () {
		return {
			id: this.attr(null),
			pid: this.attr(null),
			position: this.attr(''),
			position_archetype: this.attr(''),
			mental_archetype: this.attr(''),
			overall: this.attr(0),
			potential: this.attr(0),
			fuzz: this.attr(0),
			// Mental
			aggression: this.attr(0),
			anticipation: this.attr(0),
			bravery: this.attr(0),
			composure: this.attr(0),
			concentration: this.attr(0),
			decisions: this.attr(0),
			determination: this.attr(0),
			flair: this.attr(0),
			leadership: this.attr(0),
			off_the_ball: this.attr(0),
			positioning: this.attr(0),
			teamwork: this.attr(0),
			vision: this.attr(0),
			work_rate: this.attr(0),
			// Physical
			speed: this.attr(0),
			acceleration: this.attr(0),
			agility: this.attr(0),
			strength: this.attr(0),
			vertical: this.attr(0),
			stamina: this.attr(0),
			// Throwing
			throw_accuracy_deep: this.attr(0),
			throw_accuracy_mid: this.attr(0),
			throw_accuracy_short: this.attr(0),
			throw_on_the_run: this.attr(0),
			throw_power: this.attr(0),
			play_action: this.attr(0),
			// Ballcarrier
			carrying: this.attr(0),
			break_tackle: this.attr(0),
			stiff_arm: this.attr(0),
			spin_move: this.attr(0),
			trucking: this.attr(0),
			juking: this.attr(0),
			// Receiving
			short_route_running: this.attr(0),
			medium_route_running: this.attr(0),
			deep_route_running: this.attr(0),
			catching: this.attr(0),
			release: this.attr(0),
			catch_in_traffic: this.attr(0),
			// Blocking
			run_blocking: this.attr(0),
			pass_blocking: this.attr(0),
			run_block_power: this.attr(0),
			pass_block_power: this.attr(0),
			run_block_finesse: this.attr(0),
			pass_block_finesse: this.attr(0),
			// Defensive
			shed_block: this.attr(0),
			tackle: this.attr(0),
			hit_power: this.attr(0),
			play_recognition: this.attr(0),
			pursuit: this.attr(0),
			man_coverage: this.attr(0),
			zone_coverage: this.attr(0),
			press: this.attr(0),
			// Kicking
			kick_accuracy: this.attr(0),
			kick_power: this.attr(0),
			punt_accuracy: this.attr(0),
			punt_power: this.attr(0)
		}
	}

	id!: number
	pid!: number
	position!: string
	position_archetype!: string
	mental_archetype!: string
	overall!: number
	potential!: number
	fuzz!: number
	// Mental
	aggression!: number
	anticipation!: number
	bravery!: number
	composure!: number
	concentration!: number
	decisions!: number
	determination!: number
	flair!: number
	leadership!: number
	off_the_ball!: number
	positioning!: number
	teamwork!: number
	vision!: number
	work_rate!: number
	// Physical
	acceleration!: number
	agility!: number
	speed!: number
	stamina!: number
	strength!: number
	vertical!: number
	// Throwing
	throw_accuracy_deep!: number
	throw_accuracy_mid!: number
	throw_accuracy_short!: number
	throw_on_the_run!: number
	throw_power!: number
	play_action!: number
	// Ballcarrier
	carrying!: number
	break_tackle!: number
	stiff_arm!: number
	spin_move!: number
	trucking!: number
	juking!: number
	// Receiving
	short_route_running!: number
	medium_route_running!: number
	deep_route_running!: number
	catching!: number
	release!: number
	catch_in_traffic!: number
	// Blocking
	pass_blocking!: number
	run_blocking!: number
	run_block_power!: number
	run_block_finesse!: number
	pass_block_power!: number
	pass_block_finesse!: number
	// Defensive
	shed_block!: number
	tackle!: number
	hit_power!: number
	play_recognition!: number
	pursuit!: number
	zone_coverage!: number
	man_coverage!: number
	press!: number
	// Kicking
	kick_accuracy!: number
	kick_power!: number
	punt_accuracy!: number
	punt_power!: number

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

export default Ratings
