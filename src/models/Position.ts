import { Model } from '@vuex-orm/core';

export default class Position extends Model {
    static entity: string = 'position';

    static fields() {
        return {
            id: this.attr(null),
            player_id: this.attr(null),
            position: this.string(''),
            experience: this.number(0),
        }
    }

    declare id: number;
    declare player_id: number;
    declare position: string;
    declare experience: number;
}