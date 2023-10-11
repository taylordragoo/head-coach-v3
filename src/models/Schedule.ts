import { Model } from '@vuex-orm/core'
import Team from '@/models/Team';
import Matchup from '@/models/Matchup';

export default class Schedule extends Model {
    static entity = 'schedule'
    static fields () {
        return {
            id: this.attr(null),
            lid: this.number(null),
            matchup: this.hasMany(Matchup, 'sid'),
        }
    }
}
