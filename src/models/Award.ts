import { Model } from '@vuex-orm/core'

export default class Award extends Model {
	static entity = 'awards'
	static fields () {
		return {
			id: this.uid(),
			pid: this.attr(null),
			name: this.string(''),
			year: this.string(''),
		}
	}
}
