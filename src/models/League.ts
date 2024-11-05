import { Model } from '@vuex-orm/core'
import Team from '@/models/Team';
import Match from '@/models/Match';
import { DEFAULT_SCHEDULE } from '@/data/constants';

export default class League extends Model {
    static entity = 'league'

    static fields () {
        return {
            id: this.attr(null),
            wid: this.attr(null),
            abbrev: this.string(''),
            name: this.string(''),
            country: this.string(''),
            phase: this.number(0),
            tier: this.number(0),
            teams: this.hasMany(Team, 'lid'),
            matches: this.hasMany(Match, 'leagueId')
        }
    }

    declare id: number
    declare abbrev: string
    declare name: string
    declare country: string
    declare wid: number
    declare teams: Team[] | null
    declare phase: number
    declare tier: number
    declare matches: Match[] | null

    get phase_name() {
        let phase_data = DEFAULT_SCHEDULE.find(p => p.id === this.phase);
        return phase_data ? phase_data.display_name : 'Unknown';
    }
}
