import { Model } from '@vuex-orm/core'

export default class Skill extends Model {
	static entity = 'skills'
	static fields () {
		return {
			id: this.uid(),
			pid: this.attr(null),
			name: this.string(''),
		}
	}
}
