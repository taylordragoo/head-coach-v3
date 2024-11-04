import { Model } from 'pinia-orm'
import League from '@/models/League';
import moment from 'moment';

export default class World extends Model {
    static entity: string = 'world'

    static fields () {
        return {
            id: this.uid(),
            date: this.attr(''),
            season: this.number(null),
            user_id: this.attr(null),
            leagues: this.hasMany(League, 'wid'),
        }
    }

    static piniaOptions = {
        persist: true
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
