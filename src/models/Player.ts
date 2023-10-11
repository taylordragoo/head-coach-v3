import { Model } from '@vuex-orm/core';
import Salary from "@/models/Salary";
import Stat from "@/models/Stat";
import Injury from "@/models/Injury";
import Contract from "@/models/Contract";
import Draft from "@/models/Draft";
import Ratings from "@/models/Ratings";
import College from "@/models/College";
import Born from "@/models/Born";
import Transaction from "@/models/Transaction";
import Relative from "@/models/Relative";
import Award from "@/models/Award";
import Health from "@/models/Health";

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
            img_url: this.attr(''),
            height: this.attr(0),
            weight: this.attr(0),
            college_id: this.attr(0),
            days_until_can_trade: this.attr(0),
            retired_year: this.attr(null),
            roster_order: this.attr(0),
            years_free_agent: this.attr(0),
            value: this.attr(0),
            value_no_pot: this.attr(0),
            value_fuzz: this.attr(0),
            value_no_pot_fuzz: this.attr(0),

            // Relationships
            born: this.hasOne(Born, 'pid'),
            college: this.belongsTo(College, 'college_id'),
            contract: this.hasOne(Contract, 'pid'),
            draft: this.hasOne(Draft, 'pid'),
            ratings: this.hasOne(Ratings, 'pid'),
            health: this.hasOne(Health, 'pid'),
            injuries: this.hasMany(Injury, 'pid'),
            relatives: this.hasMany(Relative, 'pid'),
            salaries: this.hasMany(Salary, 'player_id'),
            stats: this.hasMany(Stat, 'pid'),
            transactions: this.hasMany(Transaction, 'pid'),
            awards: this.hasMany(Award, 'pid'),
        }
    }
}
