import { Model } from '@vuex-orm/core';
import Salary from "@/models/Salary";
import Stat from "@/models/Stat";
import Injury from "@/models/Injury";
import Contract from "@/models/Contract";
import Draft from "@/models/Draft";
import Ratings from "@/models/Ratings";
import College from "@/models/College";
import Born from "@/models/Born";
import Health from "@/models/Health";
import Position from '@/models/Position';

export default class Player extends Model {
    static entity: string = 'player';

    static fields() {
        return {
            // Attributes
            id: this.attr(null),
            pid: this.attr(0),
            team_id: this.attr(0),
            first_name: this.attr(''),
            last_name: this.attr(''),
            height: this.attr(0),
            weight: this.attr(0),
            college_id: this.attr(0),
            value: this.attr(0),
            value_no_pot: this.attr(0),
            value_fuzz: this.attr(0),
            value_no_pot_fuzz: this.attr(0),

            // Relationships
            position: this.hasMany(Position, 'player_id'),
            born: this.hasOne(Born, 'pid'),
            college: this.belongsTo(College, 'college_id'),
            contract: this.hasOne(Contract, 'pid'),
            draft: this.hasOne(Draft, 'pid'),
            ratings: this.hasMany(Ratings, 'pid'),
            health: this.hasOne(Health, 'pid'),
            injuries: this.hasMany(Injury, 'pid'),
            salaries: this.hasMany(Salary, 'player_id'),
            stats: this.hasMany(Stat, 'pid'),
        }
    }

    declare id: number;
    declare pid: number;
    declare team_id: number;
    declare first_name: string;
    declare last_name: string;
    declare height: number;
    declare weight: number;
    declare college_id: number;
    declare value: number;
    declare value_no_pot: number;
    declare value_fuzz: number;
    declare value_no_pot_fuzz: number;
    
    declare position: Position[];
    declare born: Born;
    declare college: College;
    declare contract: Contract;
    declare draft: Draft;
    declare ratings: Ratings[];
    declare health: Health;
    declare injuries: Injury[];
    declare salaries: Salary[];
    declare stats: Stat[];

    get full_name () {
        return `${this.first_name} ${this.last_name}`
    }

    get player_exp () {
        let draft = Draft.query().where('pid', this.pid).first();
        return draft ? (2024 - draft.year) : 0;
    }
}
