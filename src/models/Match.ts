import { Model } from 'pinia-orm'
import Team from '@/models/Team';
import League from "@/models/League";

export default class Match extends Model {
    static entity = 'matches'

    static fields () {
        return {
            id: this.uid(),
            homeTeamId: this.attr(null),
            awayTeamId: this.attr(null),
            week: this.attr(null),
            // homeTeam: this.belongsTo(Team, 'homeTeamId'),
            // awayTeam: this.belongsTo(Team, 'awayTeamId'),
            leagueId: this.attr(null),
            // league: this.belongsTo(League, 'leagueId')
        }
    }

    static piniaOptions = {
        persist: true
    }

    declare id: number
    declare homeTeamId: number
    declare awayTeamId: number
    declare week: number
    // declare homeTeam: Team | null
    // declare awayTeam: Team | null
    declare leagueId: number
    // declare league: League | null
}
