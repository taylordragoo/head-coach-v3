import { Model } from 'pinia-orm'
import Season from '@/models/Season';
import Stat from '@/models/Stat';
import Player from '@/models/Player';
import League from "@/models/League";
import Staff from '@/models/Staff';
import Budget from '@/models/Budget';
import DepthChart from '@/models/DepthChart';

export default class Team extends Model {
    static entity: string = 'team'

    static fields() {
        return {
            id: this.attr(null),
            tid: this.attr(null),
            lid: this.attr(null),
            cid: this.attr(null),
            name: this.attr(''),
            img_url: this.attr(''),
            region: this.attr(''),
            abbreviation: this.attr(''),
            country: this.attr(''),
            population: this.attr(0),
            stadium_capacity: this.attr(0),
            retired_numbers: this.attr(''),
            strategy: this.attr(''),

            // Data
            budget: this.hasMany(Budget, 'team_id'),
            seasons: this.hasMany(Season, 'tid'),
            stats: this.hasMany(Stat, 'tid'),
            depthChart: this.hasMany(DepthChart, 'team_id'),
            
            // Players
            players: this.hasMany(Player, 'team_id'),

            // Coaching Staff
            head_coach: this.hasOne(Staff, 'team_id'),
            offensive_coordinator: this.hasOne(Staff, 'team_id'),
            defensive_coordinator: this.hasOne(Staff, 'team_id'),
            qb_coach: this.hasOne(Staff, 'team_id'),
            rb_coach: this.hasOne(Staff, 'team_id'),
            wr_coach: this.hasOne(Staff, 'team_id'),
            te_coach: this.hasOne(Staff, 'team_id'),
            oline_coach: this.hasOne(Staff, 'team_id'),
            dline_coach: this.hasOne(Staff, 'team_id'),
            linebacker_coach: this.hasOne(Staff, 'team_id'),
            secondary_coach: this.hasOne(Staff, 'team_id'),
            special_teams_coach: this.hasOne(Staff, 'team_id'),
            strength_coach: this.hasOne(Staff, 'team_id'),
            coach: this.hasMany(Staff, 'team_id'),

            // Front Office Personnel
            owner: this.hasOne(Staff, 'team_id'),
            president: this.hasOne(Staff, 'team_id'),
            chief_executive_officer: this.hasOne(Staff, 'team_id'),
            general_manager: this.hasOne(Staff, 'team_id'),
            director_pro_scouting: this.hasOne(Staff, 'team_id'),
            director_college_scouting: this.hasOne(Staff, 'team_id'),
            scout: this.hasMany(Staff, 'team_id'),

            // Sports Medicine
            sports_medicine_director: this.hasOne(Staff, 'team_id'),
            doctor: this.hasMany(Staff, 'team_id'),
            trainer: this.hasMany(Staff, 'team_id'),
        };
    }

    static piniaOptions = {
        persist: true
    }

    declare id: number
    declare tid: number
    declare lid: number
    declare cid: number
    declare name: string | null
    declare img_url: string | null
    declare region: string | null
    declare abbreviation: string | null
    declare country: string | null
    declare population: number | null
    declare stadium_capacity: number | null
    declare retired_numbers: string | null
    declare budget: Budget | null
    declare strategy: string | null
    declare seasons: Season[] | null
    declare stats: Stat[] | null
    declare players: Player[] | null
    declare league: League | null
    declare depthChart: DepthChart[] | null
    declare head_coach: Staff | null
    declare offensive_coordinator: Staff | null
    declare defensive_coordinator: Staff | null
    declare qb_coach: Staff | null
    declare rb_coach: Staff | null
    declare wr_coach: Staff | null
    declare te_coach: Staff | null
    declare oline_coach: Staff | null
    declare dline_coach: Staff | null
    declare secondary_coach: Staff | null
    declare special_teams_coach: Staff | null
    declare strength_coach: Staff | null
    declare coach: Staff[] | null
    declare owner: Staff | null
    declare president: Staff | null
    declare chief_executive_officer: Staff | null
    declare general_manager: Staff | null
    declare director_of_scouting: Staff | null
    declare director_pro_scouting: Staff | null
    declare director_college_scouting: Staff | null
    declare scout: Staff[] | null
    declare sports_medicine_director: Staff | null
    declare physio: Staff[] | null
    declare trainer: Staff[] | null
}
