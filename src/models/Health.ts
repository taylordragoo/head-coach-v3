import { Model } from '@vuex-orm/core'

export default class Health extends Model {
	static entity = 'health'
	static fields () {
		return {
			id: this.uid(),
			pid: this.attr(null),
			status: this.string('')
		}
	}
}
