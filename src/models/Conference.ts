import { Model } from '@vuex-orm/core'
import Division from '@/models/Division';
import Team from '@/models/Team';

export default class Conference extends Model {
    static entity = 'conference'
    static fields () {
        return {
            id: this.uid(),
            lid: this.number(null),
            cid: this.number(null),
            name: this.string(null),
            divisions: this.hasMany(Division, 'cid'),
            teams: this.hasMany(Team, 'cid')
        }
    }
}
