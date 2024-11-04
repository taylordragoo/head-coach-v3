import { Model } from 'pinia-orm'

export default class Budget extends Model {
    static entity = 'budgets'

    static fields() {
        return {
            id: this.uid(),
            team_id: this.attr(null),
            type: this.attr(''),
            amount: this.attr(null),
        }
    }

    static piniaOptions = {
        persist: true
    }

    declare id: number
    declare team_id: number
    declare type: string
    declare amount: number
}