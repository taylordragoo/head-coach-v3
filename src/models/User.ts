import { Model } from '@vuex-orm/core'
import Team from '@/models/Team'
import World from '@/models/World';
import Mail from '@/models/Mail';
import Contract from '@/models/Contract';

export default class User extends Model {
    static entity = 'user'

    static fields () {
        return {
            id: this.attr(null),
            first: this.string(''),
            last: this.string(''),
            age: this.number(0),
            exp: this.string(''),
            skill: this.string(''),
            team: this.belongsTo(Team, 'team_id'),
            team_id: this.attr(''),
            world: this.hasOne(World, 'user_id'),
            mail: this.hasMany(Mail, 'user_id'),
            contract: this.hasOne(Contract, 'user_id')
        }
    }

    id!: number
    first!: string
    last!: string
    age!: number
    exp!: string
    skill!: string
    team!: Team
    team_id!: number
    world!: World
    mail!: Mail
    contract!: Contract

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
