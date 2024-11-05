import { Model } from '@vuex-orm/core'
import Team from '@/models/Team'
import World from '@/models/World';
import Mail from '@/models/Mail';
import Contract from '@/models/Contract';

export default class User extends Model {
    static entity = 'user'

    static fields () {
        return {
            id: this.number(0),
            first: this.string(null),
            last: this.string(null),
            age: this.number(null),
            exp: this.string(null),
            skill: this.string(null),
            team_id: this.number(null),
            team: this.belongsTo(Team, 'team_id'),
            world: this.hasOne(World, 'user_id'),
            contract: this.hasOne(Contract, 'user_id')
        }
    }

    declare id: number
    declare first: string
    declare last: string
    declare age: number
    declare exp: string
    declare skill: string
    declare team_id: number
    declare team: Team
    declare world: World
    declare contract: Contract

    get full_name () {
        return `${this.first} ${this.last}`
    }

    get team_obj() {
        return Team.find(this.team_id);
    }

    get team_league() {
        return this.team_obj?.league;
    }
}
