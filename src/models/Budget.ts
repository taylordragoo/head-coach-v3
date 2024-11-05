import { Model } from '@vuex-orm/core'

export default class Budget extends Model {
    static entity = 'budgets'

static fields () {
        return {
            id: this.uid(),
            team_id: this.attr(null),
            type: this.attr(''),
            amount: this.attr(0),
        }
    }

    declare id: number
    declare team_id: number
    declare type: string
    declare amount: number
}