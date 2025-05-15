import { Model } from '@vuex-orm/core'
import Player from '@/models/Player'

export default class Draft extends Model {
    static entity = 'draft'
    static fields () {
        return {
            id: this.uid(),
            player_id: this.attr(null),
            round: this.number(null),
            pick: this.number(null),
            year: this.number(null),
            pot: this.number(null),
            ovr: this.number(null),
            orig_team_id: this.number(null),
            player: this.belongsTo(Player, 'player_id')
        }
    }

    declare id: number
    declare player_id: number
    declare round: number
    declare pick: number
    declare year: number
    declare pot: number
    declare ovr: number
    declare orig_team_id: number

    declare player: Player
}
