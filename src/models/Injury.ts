import { Model } from 'pinia-orm'

export default class Injury extends Model {
    static entity = 'injury'
    static fields () {
        return {
            id: this.uid(),
            pid: this.attr(null),
            type: this.string(''),
            daysRemaining: this.attr(null)
        }
    }

    static piniaOptions = {
        persist: true
    }

    declare id: number
    declare pid: number
    declare type: string
    declare daysRemaining: number
}
