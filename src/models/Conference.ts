import { Model } from 'pinia-orm'
import Division from '@/models/Division';
import Team from '@/models/Team';

export default class Conference extends Model {
    static entity = 'conference'
    static fields () {
        return {
            id: this.uid(),
            lid: this.number(null),
            cid: this.number(null),
            divisions: this.hasMany(Division, 'cid'),
            teams: this.hasMany(Team, 'cid'),
            name: this.attr('')
        }
    }

    static piniaOptions = {
        persist: true
    }

    declare id: number
    declare lid: number
    declare cid: number
    declare name: string
    declare teams: Team[] | null
    declare divisions: Division[] | null
}
