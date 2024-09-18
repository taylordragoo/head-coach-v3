import { Model } from '@vuex-orm/core'

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
			// Technical
			carrying: this.attr(0),
			catching: this.attr(0),
			kick_accuracy: this.attr(0),
			kick_power: this.attr(0),
			man_coverage: this.attr(0),
			pass_blocking: this.attr(0),
			play_action: this.attr(0),
			punt_accuracy: this.attr(0),
			punt_power: this.attr(0),
			route_running: this.attr(0),
			run_blocking: this.attr(0),
			shed_block: this.attr(0),
			tackle: this.attr(0),
			throw_accuracy_deep: this.attr(0),
			throw_accuracy_mid: this.attr(0),
			throw_accuracy_short: this.attr(0),
			throw_on_the_run: this.attr(0),
			throw_power: this.attr(0),
			zone_coverage: this.attr(0),
			// Mental
			aggresion: this.attr(0),
			aniticipation: this.attr(0),
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
			stamina: this.attr(0)
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
	// Technical
	carrying!: number
	catching!: number
	kick_accuracy!: number
	kick_power!: number
	man_coverage!: number
	pass_blocking!: number
	play_action!: number
	punt_accuracy!: number
	punt_power!: number
	route_running!: number
	run_blocking!: number
	shed_block!: number
	tackle!: number
	throw_accuracy_deep!: number
	throw_accuracy_mid!: number
	throw_accuracy_short!: number
	throw_on_the_run!: number
	throw_power!: number
	zone_coverage!: number
	// Mental
	aggresion!: number
	aniticipation!: number
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
}

export default Ratings
