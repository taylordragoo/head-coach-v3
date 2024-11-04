import { Model } from 'pinia-orm'
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
import Position from '@/models/Position';
import { getModelRepo } from '@/data/constants';

export default class Player extends Model {
    static entity: string = 'player';

    static fields() {
        return {
            // Attributes
            id: this.attr(0),
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
            position_archetype: this.attr(''),
            mental_archetype: this.attr(''),
            base_rating: this.attr(0),

            // Relationships
            position: this.hasMany(Position, 'player_id'),
            born: this.hasOne(Born, 'pid'),
            college: this.belongsTo(College, 'college_id'),
            contract: this.hasOne(Contract, 'player_id'),
            draft: this.hasOne(Draft, 'pid'),
            ratings: this.hasMany(Ratings, 'pid'),
            health: this.hasOne(Health, 'pid'),
            injuries: this.hasMany(Injury, 'pid'),
            relatives: this.hasMany(Relative, 'pid'),
            salaries: this.hasMany(Salary, 'player_id'),
            stats: this.hasMany(Stat, 'pid'),
            transactions: this.hasMany(Transaction, 'pid'),
            awards: this.hasMany(Award, 'pid'),
        }
    }

    static piniaOptions = {
        persist: true
    }
    
    declare id: number;
    declare pid: number;
    declare team_id: number;
    declare first_name: string;
    declare last_name: string;
    declare img_url: string;
    declare height: number;
    declare weight: number;
    declare college_id: number;
    declare days_until_can_trade: number;
    declare retired_year: number;
    declare roster_order: number;
    declare years_free_agent: number;
    declare value: number;
    declare value_no_pot: number;
    declare value_fuzz: number;
    declare value_no_pot_fuzz: number;
    declare position_archetype: string;
    declare mental_archetype: string;
    declare base_rating: number;

    declare position: Position[];
    declare born: Born;
    declare college: College;
    declare contract: Contract;
    declare draft: Draft;
    declare ratings: Ratings;
    declare health: Health;
    declare injuries: Injury[];
    declare relatives: Relative[];
    declare salaries: Salary[];
    declare stats: Stat[];
    declare transactions: Transaction[];
    declare awards: Award[];

    get full_name () {
        return `${this.first_name} ${this.last_name}`
    }

    get player_exp () {
        let modelRepo = getModelRepo();
        let draft = modelRepo.draft.query().where('pid', this.pid).first();
        return draft ? (2024 - draft.year) : 0;
    }
}
