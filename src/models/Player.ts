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
            position: this.attr(''),
            position_archetype: this.attr(''),
            mental_archetype: this.attr(''),
            base_rating: this.attr(0),

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

    id!: number;
    pid!: number;
    team_id!: number;
    first_name!: string;
    last_name!: string;
    img_url!: string;
    height!: number;
    weight!: number;
    college_id!: number;
    days_until_can_trade!: number;
    retired_year!: number;
    roster_order!: number;
    years_free_agent!: number;
    value!: number;
    value_no_pot!: number;
    value_fuzz!: number;
    value_no_pot_fuzz!: number;
    position!: string;
    position_archetype!: string;
    mental_archetype!: string;
    
    base_rating!: number;

    born!: Born;
    college!: College;
    contract!: Contract;
    draft!: Draft;
    ratings!: Ratings;
    health!: Health;
    injuries!: Injury[];
    relatives!: Relative[];
    salaries!: Salary[];
    stats!: Stat[];
    transactions!: Transaction[];
    awards!: Award[];

    get full_name () {
        return `${this.first_name} ${this.last_name}`
    }

    get player_exp () {
        let draft = Draft.query().where('pid', this.pid).first();
        return draft ? (2024 - draft.year) : 0;
    }
}
