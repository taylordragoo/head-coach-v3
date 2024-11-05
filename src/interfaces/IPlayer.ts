export default interface IPlayer {
    id: number;
    pid: number;
    team_id: number;
    first_name: string;
    last_name: string;
    height: number;
    weight: number;
    college_id: number;
    value: number;
    value_no_pot: number;
    value_fuzz: number;
    value_no_pot_fuzz: number;
    
    born: object;
    college: object;
    contract: object;
    draft: object;
    ratings: object;
    health: object;
    position: object[];
    injuries: object[];
    salaries: object[];
    stats: object[];
}