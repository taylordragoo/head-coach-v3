import { Model } from '@vuex-orm/core'
import StaffContract from '@/models/StaffContract';

export default class Staff extends Model {
    static entity = 'staff'

    static fields() {
        return {
            id: this.attr(null),
            first_name: this.attr(''),
            last_name: this.attr(''),
            team_id: this.attr(0),
            role: this.attr(''),
            contract: this.hasOne(StaffContract, 'staff_id'),
            birth_year: this.attr(0),

            // Mental
            leadership: this.attr(0),
            adaptability: this.attr(0),
            ambition: this.attr(0),
            discipline: this.attr(0),
            motivation: this.attr(0),

            // Knowledge
            rookie_player_management: this.attr(0),
            veteran_player_management: this.attr(0),
            contract_negotiations: this.attr(0),
            play_calling_ability: this.attr(0),
            gameplan: this.attr(0),

            // Scouting
            data_analysis: this.attr(0),
            player_ability_analysis: this.attr(0),
            player_potential_analysis: this.attr(0),
            staff_ability_analysis: this.attr(0),

            // Technical
            offensive_technical: this.attr(0),
            defensive_technical: this.attr(0),
            throwing_technical: this.attr(0),
            hands_technical: this.attr(0),
            routes_technical: this.attr(0),
            blocking_technical: this.attr(0),
            tackling_technical: this.attr(0),
            coverage_technical: this.attr(0),
            kicking_technical: this.attr(0),
            punting_technical: this.attr(0),
            
            // Medical
            athletic_training: this.attr(0),
            medical_training: this.attr(0),
        }
    }
}