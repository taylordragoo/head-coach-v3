import { Model } from 'pinia-orm'

export default class Health extends Model {
	static entity = 'health'
	static fields () {
		return {
			id: this.uid(),
			pid: this.attr(null),
			status: this.string('')
		}
	}

    static piniaOptions = {
        persist: true
    }

    declare id: number  
    declare pid: number
    declare status: string
}
