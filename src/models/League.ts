import { Model } from '@vuex-orm/core'
import Team from '@/models/Team';
import Match from '@/models/Match';
import { DEFAULT_SCHEDULE } from '@/data/constants';

export default class League extends Model {
    static entity = 'league'

    static fields () {
        return {
            id: this.attr(null),
            abbrev: this.attr(''),
            name: this.attr(''),
            country: this.string(''),
            wid: this.attr(null),
            teams: this.hasMany(Team, 'lid'),
            phase: this.number(0),
            tier: this.number(0),
            matches: this.hasMany(Match, 'leagueId')
        }
    }

    id!: number
    abbrev!: string | null
    name!: string | null
    country!: string | null
    wid!: number | null
    phase!: number | null
    tier!: number | null
    teams!: Team[] | null
    matches!: Match[] | null

    get phase_name() {
        let phase_data = DEFAULT_SCHEDULE.find(p => p.id === this.phase);
        return phase_data ? phase_data.display_name : 'Unknown';
    }
}
