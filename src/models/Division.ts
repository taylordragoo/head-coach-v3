import { Model } from '@vuex-orm/core'
import Team from '@/models/Team';

export default class Division extends Model {
    static entity = 'division'
    static fields () {
        return {
            id: this.attr(null),
            lid: this.number(null),
            did: this.number(null),
            cid: this.number(null),
            teams: this.hasMany(Team, 'did'),
            name: this.attr('')
        }
    }
}
