import { Model } from '@vuex-orm/core'
import Team from '@/models/Team';
import League from "@/models/League";

export default class Match extends Model {
    static entity = 'matches'

    static fields () {
        return {
            id: this.attr(null),
            homeTeamId: this.attr(null),
            awayTeamId: this.attr(null),
            week: this.attr(null),
            homeTeam: this.belongsTo(Team, 'homeTeamId'),
            awayTeam: this.belongsTo(Team, 'awayTeamId'),
            leagueId: this.attr(null),
            league: this.belongsTo(League, 'leagueId')
        }
    }
}
