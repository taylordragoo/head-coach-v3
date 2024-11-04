import { Model } from 'pinia-orm'

export default class Born extends Model {
    static entity = 'born'
    static fields () {
        return {
            id: this.uid(),
            pid: this.attr(null),
            year: this.number(null),
            location: this.string('')
        }
    }

    static piniaOptions = {
        persist: true
    }

    declare id: number
    declare pid: number
    declare year: number
    declare location: string
}
