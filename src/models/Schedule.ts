import { Model } from 'pinia-orm'
import Team from '@/models/Team';
import Matchup from '@/models/Matchup';

export default class Schedule extends Model {
    static entity = 'schedule'
    static fields () {
        return {
            id: this.uid(),
            lid: this.number(null),
            matchup: this.hasMany(Matchup, 'sid'),
        }
    }

    static piniaOptions = {
        persist: true
    }

    declare id: number
    declare lid: number
    declare matchup: Matchup[]
}
