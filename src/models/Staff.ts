import { Model } from 'pinia-orm'
import StaffContract from '@/models/StaffContract';

export default class Staff extends Model {
    static entity: string = 'staff'

    static fields() {
        return {
            id: this.uid(),
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

    static piniaOptions = {
        persist: true
    }

    declare id: number
    declare first_name: string
    declare last_name: string
    declare team_id: number
    declare role: string
    declare contract: StaffContract
    declare birth_year: number
    declare leadership: number
    declare adaptability: number
    declare ambition: number
    declare discipline: number
    declare motivation: number
    declare rookie_player_management: number
    declare veteran_player_management: number
    declare contract_negotiations: number
    declare play_calling_ability: number
    declare gameplan: number
    declare data_analysis: number
    declare player_ability_analysis: number
    declare player_potential_analysis: number
    declare staff_ability_analysis: number
    declare offensive_technical: number
    declare defensive_technical: number
    declare throwing_technical: number
    declare hands_technical: number
    declare routes_technical: number
    declare blocking_technical: number
    declare tackling_technical: number
    declare coverage_technical: number
    declare dancing_training: number
    declare medical_training: number
}