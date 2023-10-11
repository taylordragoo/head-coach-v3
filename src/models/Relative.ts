import { Model } from '@vuex-orm/core'

export default class Relative extends Model {
	static entity = 'relatives'
	static fields () {
		return {
			id: this.uid(),
			pid: this.attr(null),
			first_name: this.string(''),
			last_name: this.string(''),
			relationship: this.string(''),
			age: this.number(null),
			alive: this.boolean(false),
		}
	}
}
