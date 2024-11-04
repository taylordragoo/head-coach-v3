import { Model } from 'pinia-orm'

export default class Transaction extends Model {
    static entity = 'transaction'
    static fields () {
        return {
            id: this.uid(),
            pid: this.attr(null),
            tid: this.attr(null),
            year: this.number(null)
        }
    }

    static piniaOptions = {
        persist: true
    }

    declare id: number
    declare pid: number
    declare tid: number
    declare year: number
}
