import { Model } from '@vuex-orm/core'

class College extends Model {
	static entity = 'colleges'

	static fields () {
		return {
			id: this.attr(null),
			tid: this.attr(0),
			college_id: this.attr(0),
			did: this.attr(0),
			region: this.attr(''),
			name: this.attr(''),
			abbrev: this.attr(''),
			population: this.attr(0),
			city: this.attr(''),
			state: this.attr(''),
			latitude: this.attr(0),
			longitude: this.attr(0),
		}
	}
}

export default College
