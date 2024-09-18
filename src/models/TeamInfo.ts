import { Model } from '@vuex-orm/core'
import Season from '@/models/Season';
import Stat from '@/models/Stat';
import Player from '@/models/Player';
import League from "@/models/League";
import Staff from '@/models/Staff';
import Contract from '@/models/Contract';

export default class TeamInfo extends Model {
    static entity: string = 'teamInfo'

    static fields() {
        return {
            id: this.attr(null),
            tid: this.attr(null),
            name: this.attr(''),
            abbreviation: this.attr(''),
            country: this.attr(''),
            population: this.attr(0),
            stadium_capacity: this.attr(0),
            retired_numbers: this.attr(''),
        };
    }

    id!: number
    tid!: number
    name!: string | null
    abbreviation!: string | null
    country!: string | null
    population!: number | null
    stadium_capacity!: number | null
}
