import { Model } from 'pinia-orm'

export default class Contract extends Model {
    static entity = 'contracts'
    static fields () {
        return {
            id: this.uid(),
            player_id: this.attr(null),
            amount: this.number(null),
            expires: this.number(null)
        }
    }

    static piniaOptions = {
        persist: true
    }

    declare id: number
    declare player_id: number
    declare amount: number
    declare expires: number
}
