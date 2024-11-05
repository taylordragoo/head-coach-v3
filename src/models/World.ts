import { Model } from '@vuex-orm/core'
import League from '@/models/League';
import moment from 'moment';

export default class World extends Model {
    static entity = 'world'

    static fields () {
        return {
            id: this.attr(null),
            date: this.attr(null),
            season: this.attr(null),
            user_id: this.attr(null),
            phase: this.attr(null),
            leagues: this.hasMany(League, 'wid'),
        }
    }

    declare id: number
    declare date: string
    declare season: number
    declare user_id: number
    declare leagues: League[]

    get currentWeek() {
        // Use moment.js to get the week of the year. By default, weeks start on Sunday.
        return moment(this.date).week();
    }

    get currentDayOfWeek() {
        // Use moment.js to get the day of the week. 0 is Sunday, 1 is Monday, etc.
        return moment(this.date).format('dddd');
    }
}
