import { Model } from 'pinia-orm'
import { POSITION_ARCHETYPES_DISPLAY_NAMES, MENTAL_ARCHETYPES_DISPLAY_NAMES } from '@/data/constants';
import Overalls from '@/models/Overalls';
import Potentials from '@/models/Potentials';

export default class Ratings extends Model {
	static entity: string = 'ratings'

    static piniaOptions = {
        persist: true
    }

	static fields () {
		return {
			id: this.uid(),
			pid: this.attr(null),
			position: this.attr(''),
			position_archetype: this.attr(''),
			mental_archetype: this.attr(''),
            season: this.attr(''),
            overalls: this.hasOne(Overalls, 'rating_id'),
            potentials: this.hasOne(Potentials, 'rating_id'),

			// Physical
			speed: this.attr(0),
			acceleration: this.attr(0),
			strength: this.attr(0),
			stamina: this.attr(0),

			// Throwing
			throw_accuracy_short: this.attr(0),
			throw_power: this.attr(0),
			play_action: this.attr(0),

			// Ballcarrier
			carrying: this.attr(0),
			break_tackle: this.attr(0),

			// Receiving
			short_route_running: this.attr(0),
			catching: this.attr(0),
			release: this.attr(0),

			// Blocking
			run_blocking: this.attr(0),
			pass_blocking: this.attr(0),

			// Defensive
			shed_block: this.attr(0),
			tackle: this.attr(0),
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

	declare id: number
	declare pid: number
	declare position: string
	declare position_archetype: string
	declare mental_archetype: string
	declare season: string
    declare overalls: Overalls
    declare potentials: Potentials

	// Physical
	declare acceleration: number
	declare speed: number
	declare stamina: number
	declare strength: number

	// Throwing
	declare throw_accuracy_short: number
	declare throw_power: number
	declare play_action: number

	// Ballcarrier
	declare carrying: number
	declare break_tackle: number

	// Receiving
	declare short_route_running: number
	declare catching: number
	declare release: number

	// Blocking
	declare pass_blocking: number
	declare run_blocking: number

	// Defensive
	declare shed_block: number
	declare tackle: number
	declare zone_coverage: number
	declare man_coverage: number
	declare press: number

	// Kicking
	declare kick_accuracy: number
	declare kick_power: number
	declare punt_accuracy: number
	declare punt_power: number

	get position_archetype_name () {
        return POSITION_ARCHETYPES_DISPLAY_NAMES[this.position_archetype] || ''
    }

	get mental_archetype_name () {
		return MENTAL_ARCHETYPES_DISPLAY_NAMES[this.mental_archetype] || ''
	}
}
