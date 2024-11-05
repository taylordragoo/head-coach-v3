import { Model } from '@vuex-orm/core'
import StaffContract from '@/models/StaffContract';

export default class Staff extends Model {
    static entity = 'staff'

    static fields() {
        return {
            id: this.uid(),
            first_name: this.string(null),
            last_name: this.string(null),
            role: this.string(null),
            team_id: this.number(null),
            birth_year: this.number(null),
            
            // Mental
            leadership: this.number(null),
            adaptability: this.number(null),
            ambition: this.number(null),
            discipline: this.number(null),
            motivation: this.number(null),
            
            // Knowledge
            rookie_player_management: this.number(null),
            veteran_player_management: this.number(null),
            contract_negotiations: this.number(null),
            play_calling_ability: this.number(null),
            gameplan: this.number(null),
            
            // Scouting
            data_analysis: this.number(null),
            player_ability_analysis: this.number(null),
            player_potential_analysis: this.number(null),
            staff_ability_analysis: this.number(null),
            
            // Technical
            offensive_technical: this.number(null),
            defensive_technical: this.number(null),
            throwing_technical: this.number(null),
            hands_technical: this.number(null),
            routes_technical: this.number(null),
            blocking_technical: this.number(null),
            tackling_technical: this.number(null),
            coverage_technical: this.number(null),
            kicking_technical: this.number(null),
            punting_technical: this.number(null),
            
            // Medical
            athletic_training: this.number(null),
            medical_training: this.number(null),
            
            contract: this.hasOne(StaffContract, 'staff_id'),
        }
    }
}