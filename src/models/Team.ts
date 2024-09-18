import { Model } from '@vuex-orm/core'
import Season from '@/models/Season';
import Stat from '@/models/Stat';
import Player from '@/models/Player';
import League from "@/models/League";
import Staff from '@/models/Staff';
import Contract from '@/models/Contract';

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
            budget: this.attr({
                scouting: {
                    amount: 0,
                    rank: 0,
                },
                coaching: {
                    amount: 0,
                    rank: 0,
                },
                health: {
                    amount: 0,
                    rank: 0,
                },
                facilities: {
                    amount: 0,
                    rank: 0,
                },
            }),
            strategy: this.attr(''),

            // Data
            seasons: this.hasMany(Season, 'tid'),
            stats: this.hasMany(Stat, 'tid'),
            
            // Players
            players: this.hasMany(Player, 'team_id'),

            // League
            league: this.belongsTo(League, 'lid'),

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

    id!: number
    tid!: number
    lid!: number
    cid!: number
    name!: string | null
    img_url!: string | null
    region!: string | null
    abbreviation!: string | null
    country!: string | null
    population!: number | null
    stadium_capacity!: number | null
    retired_numbers!: string | null
    budget!: {
        scouting: {
            amount: number | null
            rank: number | null
        },
        coaching: {
            amount: number | null
            rank: number | null
        },
        health: {
            amount: number | null
            rank: number | null
        },
        facilities: {
            amount: number | null
            rank: number | null
        },
    }
    strategy!: string | null
    seasons!: Season[] | null
    stats!: Stat[] | null
    players!: Player[]
    league!: League
    head_coach!: Staff | null
    offensive_coordinator!: Staff | null
    defensive_coordinator!: Staff | null
    qb_coach!: Staff | null
    rb_coach!: Staff | null
    wr_coach!: Staff | null
    te_coach!: Staff | null
    oline_coach!: Staff | null
    dline_coach!: Staff | null
    secondary_coach!: Staff | null
    special_teams_coach!: Staff | null
    strength_coach!: Staff | null
    coach!: Staff[] | null
    owner!: Staff | null
    president!: Staff | null
    chief_executive_officer!: Staff | null
    general_manager!: Staff | null
    director_of_scouting!: Staff | null
    director_pro_scouting!: Staff | null
    director_college_scouting!: Staff | null
    scout!: Staff[] | null
    sports_medicine_director!: Staff | null
    physio!: Staff[] | null
    trainer!: Staff[] | null
}
