import { Model } from '@vuex-orm/core'
import Overalls from '@/models/Overalls'
import Potentials from '@/models/Potentials'
import Skill from '@/models/Skill'

class Rating extends Model {
	static entity = 'ratings'

	static fields () {
		return {
			id: this.attr(null),
			pid: this.attr(null),
			position: this.attr(''),
			acceleration: this.attr(0),
			speed: this.attr(0),
			agility: this.attr(0),
			strength: this.attr(0),
			throw_power: this.attr(0),
			throw_accuracy_short: this.attr(0),
			throw_accuracy_mid: this.attr(0),
			throw_accuracy_deep: this.attr(0),
			throw_on_the_run: this.attr(0),
			play_action: this.attr(0),
			carrying: this.attr(0),
			catching: this.attr(0),
			route_running: this.attr(0),
			release: this.attr(0),
			vertical: this.attr(0),
			run_blocking: this.attr(0),
			pass_blocking: this.attr(0),
			tackle: this.attr(0),
			shed_block: this.attr(0),
			run_stop: this.attr(0),
			press: this.attr(0),
			man_coverage: this.attr(0),
			zone_coverage: this.attr(0),
			kick_power: this.attr(0),
			kick_accuracy: this.attr(0),
			punt_power: this.attr(0),
			punt_accuracy: this.attr(0),
			stamina: this.attr(0),
			fuzz: this.attr(0),
			overall: this.attr(0),
			potential: this.attr(0),
			skills: this.hasMany(Skill, 'pid'),
			overalls: this.hasOne(Overalls, 'rating_id'),
			potentials: this.hasOne(Potentials, 'rating_id'),
		}
	}
}

export default Rating
