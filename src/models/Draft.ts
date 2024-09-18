import { Model } from '@vuex-orm/core'

export default class Draft extends Model {
    static entity = 'draft'
    static fields () {
        return {
            id: this.uid(),
            pid: this.attr(null),
            round: this.number(null),
            pick: this.number(null),
            year: this.number(null),
            pot: this.number(null),
            ovr: this.number(null),
            orig_team_id: this.number(null),
        }
    }

    id!: number
    pid!: number
    round!: number
    pick!: number
    year!: number
    pot!: number
    ovr!: number
    orig_team_id!: number
}
