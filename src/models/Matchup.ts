import { Model } from 'pinia-orm'

export default class Matchup extends Model {
    static entity = 'matchup'
    static fields () {
        return {
            id: this.uid(),
            sid: this.number(null),
            homeTid: this.number(null),
            awayTid: this.number(null),
            week: this.number(null)
        }
    }

    static piniaOptions = {
        persist: true
    }

    declare id: number
    declare sid: number
    declare homeTid: number
    declare awayTid: number
    declare week: number
}
