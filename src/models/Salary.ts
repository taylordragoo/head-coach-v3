import { Model } from '@vuex-orm/core'

export default class Salary extends Model {
    static entity = 'salaries'
    static fields () {
        return {
            id: this.uid(),
            player_id: this.attr(null),
            amount: this.number(null),
            season: this.number(null)
        }
    }
}
