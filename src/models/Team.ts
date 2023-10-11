import { Model } from '@vuex-orm/core'
import Season from '@/models/Season';
import Stat from '@/models/Stat';
import Player from '@/models/Player';
import League from "@/models/League";

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
            seasons: this.hasMany(Season, 'tid'),
            stats: this.hasMany(Stat, 'tid'),
            players: this.hasMany(Player, 'team_id'),
            league: this.belongsTo(League, 'lid')
        };
    }
}
