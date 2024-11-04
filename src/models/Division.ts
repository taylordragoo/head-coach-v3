import { Model } from 'pinia-orm'
import Team from '@/models/Team';

export default class Division extends Model {
    static entity = 'division'
    static fields () {
        return {
            id: this.uid(),
            lid: this.number(null),
            did: this.number(null),
            cid: this.number(null),
            teams: this.hasMany(Team, 'did'),
            name: this.attr('')
        }
    }

    static piniaOptions = {
        persist: true
    }

    declare id: number
    declare lid: number
    declare did: number
    declare cid: number
    declare teams: Team[] | null
    declare name: string
}
