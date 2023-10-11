import { Model } from '@vuex-orm/core'

export default class Matchup extends Model {
    static entity = 'matchup'
    static fields () {
        return {
            id: this.attr(null),
            sid: this.number(null),
            homeTid: this.number(null),
            awayTid: this.number(null),
            week: this.number(null)
        }
    }
}
