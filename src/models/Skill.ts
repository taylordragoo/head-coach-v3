import { Model } from 'pinia-orm'

export default class Skill extends Model {
	static entity = 'skills'
	static fields () {
		return {
			id: this.uid(),
			pid: this.attr(null),
			name: this.string(''),
		}
	}

    static piniaOptions = {
        persist: true
    }

    declare id: number
    declare pid: number
    declare name: string
}
