import { Model } from '@vuex-orm/core'
import Team from '@/models/Team';

export default class Division extends Model {
    static entity = 'division'
    static fields () {
        return {
            id: this.uid(),
            lid: this.number(null),
            cid: this.number(null),
            did: this.number(null),
            name: this.string(null),
            teams: this.hasMany(Team, 'did')
        }
    }
}
