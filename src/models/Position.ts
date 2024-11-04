import { Model } from 'pinia-orm'

export default class Position extends Model {
    static entity: string = 'position';

    static fields() {
        return {
            id: this.uid(),
            position: this.attr(''),
            player_id: this.attr(null),
            experience: this.attr(0),
        }
    }

    static piniaOptions = {
        persist: true
    }

    declare id: number
    declare position: string
    declare player_id: number
    declare experience: number
}