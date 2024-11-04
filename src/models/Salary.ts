import { Model } from 'pinia-orm'

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

    static piniaOptions = {
        persist: true
    }

    declare id: number
    declare player_id: number
    declare amount: number
    declare season: number
}
