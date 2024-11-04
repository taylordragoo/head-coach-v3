import { Model } from 'pinia-orm'

export default class College extends Model {
	static entity = 'colleges'

	static fields () {
		return {
			id: this.uid(),
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

    static piniaOptions = {
        persist: true
    }

    declare id: number
    declare tid: number
    declare college_id: number
    declare did: number
    declare region: string
    declare name: string
    declare abbrev: string
    declare population: number
    declare city: string
    declare state: string
    declare latitude: number
    declare longitude: number
}
