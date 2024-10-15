import { Model } from '@vuex-orm/core';

export default class Position extends Model {
    static entity: string = 'position';

    static fields() {
        return {
            id: this.attr(null),
            position: this.attr(''),
            player_id: this.attr(null),
            experience: this.attr(0),
        }
    }

    id!: number;
    player_id!: number;
    position!: string;
    experience!: number;
}