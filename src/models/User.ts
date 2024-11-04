import { Model } from 'pinia-orm'
import Team from '@/models/Team'
import World from '@/models/World';
import Mail from '@/models/Mail';
import Contract from '@/models/Contract';

export default class User extends Model {
    static entity = 'user'

    static fields () {
        return {
            id: this.uid(),
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

    static piniaOptions = {
        persist: true
    }

    declare id: number
    declare first: string
    declare last: string
    declare age: number
    declare exp: string
    declare skill: string
    declare team: Team
    declare team_id: number
    declare world: World
    declare mail: Mail
    declare contract: Contract

    get full_name () {
        return `${this.first} ${this.last}`
    }
}
