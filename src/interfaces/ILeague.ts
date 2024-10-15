import Team from '@/interfaces/ITeam';

export default interface ILeague {
    id: number | null
    abbrev: string | null
    name: string | null
    country: string | null
    wid: number | null
    teams: Team[] | null
    phase: number | null
    tier: number | null
}