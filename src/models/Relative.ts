import { Model } from 'pinia-orm'

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

    static piniaOptions = {
        persist: true
    }

    declare id: number
    declare pid: number
    declare first_name: string
    declare last_name: string
    declare relationship: string
    declare age: number
    declare alive: boolean
}
