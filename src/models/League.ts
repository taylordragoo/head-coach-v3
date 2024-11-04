import { Model } from 'pinia-orm'
import Team from '@/models/Team';
import Match from '@/models/Match';
import { DEFAULT_SCHEDULE } from '@/data/constants';

export default class League extends Model {
    static entity = 'league'

    static fields () {
        return {
            id: this.uid(),
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

    static piniaOptions = {
        persist: true
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
