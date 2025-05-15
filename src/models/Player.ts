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
import Person from '@/models/Person';
import Team from '@/models/Team';

export default class Player extends Model {
    static entity: string = 'player';

    static fields() {
        return {
            // Attributes
            id: this.attr(null),
            person_id: this.attr(0),
            team_id: this.attr(0),
            college_id: this.attr(0),

            // Relationships
            person: this.belongsTo(Person, 'person_id'),
            college: this.belongsTo(College, 'college_id'),
            contract: this.hasOne(Contract, 'person_id'),
            draft: this.hasOne(Draft, 'player_id'),
            ratings: this.hasMany(Ratings, 'player_id'),
            health: this.hasOne(Health, 'player_id'),
            injuries: this.hasMany(Injury, 'player_id'),

            stats: this.hasMany(Stat, 'player_id'),
            team: this.belongsTo(Team, 'team_id')
        }
    }

    declare id: number;
    declare person_id: number;
    declare team_id: number;
    declare college_id: number;
    
    declare college: College;
    declare contract: Contract;
    declare draft: Draft;
    declare ratings: Ratings;
    declare health: Health;
    declare injuries: Injury[];
    declare salaries: Salary[];
    declare stats: Stat[];

    get player_exp () {
        let draft = Draft.query().where('id', this.id).first();
        return draft ? (2024 - draft.year) : 0;
    }
}
