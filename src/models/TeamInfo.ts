import { Model } from 'pinia-orm'

export default class TeamInfo extends Model {
    static entity: string = 'teamInfo'

    static fields() {
        return {
            id: this.uid(),
            tid: this.attr(null),
            name: this.attr(''),
            abbreviation: this.attr(''),
            country: this.attr(''),
            population: this.attr(0),
            stadium_capacity: this.attr(0),
            retired_numbers: this.attr(''),
        };
    }

    static piniaOptions = {
        persist: true
    }

    declare id: number
    declare tid: number
    declare name: string | null
    declare abbreviation: string | null
    declare country: string | null
    declare population: number | null
    declare stadium_capacity: number | null
}
