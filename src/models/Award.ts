import { Model } from 'pinia-orm'

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

    static piniaOptions = {
        persist: true
    }

    declare id: number
    declare pid: number
    declare name: string
    declare year: string
}
