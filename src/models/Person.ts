import { Model } from '@vuex-orm/core';
import Born from "@/models/Born";
import Player from "@/models/Player";
import Staff from "@/models/Staff";

export default class Person extends Model {
    static entity: string = 'person';

    static fields() {
        return {
            // Attributes
            id: this.attr(null),
            first_name: this.attr(''),
            last_name: this.attr(''),
            height: this.attr(0),
            weight: this.attr(0),
            birth_date: this.attr(''),
            age: this.attr(0),
            created_at: this.attr(''),
            updated_at: this.attr(''),
            deleted_at: this.attr(null),

            // Relationships
            born: this.hasOne(Born, 'person_id'),
            player: this.hasOne(Player, 'person_id'),
            staff: this.hasOne(Staff, 'person_id')
        }
    }

    declare id: number;
    declare first_name: string;
    declare last_name: string;
    declare height: number;
    declare weight: number;
    declare birth_date: string;
    declare age: number;
    declare created_at: string;
    declare updated_at: string;
    declare deleted_at: string | null;
    
    declare born: Born;
    declare player: Player;
    declare staff: Staff;

    get full_name() {
        return `${this.first_name} ${this.last_name}`;
    }
}