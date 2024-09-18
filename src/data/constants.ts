import User from '@/models/User';
import World from '@/models/World';
import League from '@/models/League';
import Team from '@/models/Team';
import Player from '@/models/Player';
import Match from "@/models/Match";
import TrainingSchedule from "@/models/TrainingSchedule";
import Activity from "@/models/Activity";
import Born from "@/models/Born";
import College from "@/models/College";
import Conference from "@/models/Conference";
import DepthChart from "@/models/DepthChart";
import Division from "@/models/Division";
import Contract from "@/models/Contract";
import Draft from "@/models/Draft";
import Ratings from "@/models/Ratings";
import Health from "@/models/Health";
import Injury from "@/models/Injury";
import Relative from "@/models/Relative";
import Salary from "@/models/Salary";
import Stat from "@/models/Stat";
import Transaction from "@/models/Transaction";
import Award from "@/models/Award";
import Overalls from "@/models/Overalls";
import Potentials from "@/models/Potentials";
import Skill from "@/models/Skill";
import Phase from "@/models/Phase";
import Season from "@/models/Season";
import Staff from "@/models/Staff";
import StaffContract from "@/models/StaffContract";

export function getModelConfig() {
    return {
        user: User,
        players: Player,
        teams: Team,
        matches: Match,
        awards: Award,
        transactions: Transaction,
        draft: Draft,
        health: Health,
        born: Born,
        ratings: Ratings,
        college: College,
        salaries: Salary,
        stats: Stat,
        injuries: Injury,
        contracts: Contract,
        staff_contracts: StaffContract,
        relatives: Relative,
        overalls: Overalls,
        potentials: Potentials,
        skills: Skill,
        phases: Phase,
        training_schedules: TrainingSchedule,
        activities: Activity,
        conference: Conference,
        division: Division,
        season: Season,
        staff: Staff,
        leagues: League,
        world: World,
        depthChart: DepthChart
    }
}

export const tableNames: string[] = [
    'user',
    'players',
    'teams',
    'matches',
    'awards',
    'transactions',
    'draft',
    'health',
    'born',
    'ratings',
    'college',
    'salaries',
    'stats',
    'injuries',
    'contracts',
    'staff_contracts',
    'relatives',
    'overalls',
    'potentials',
    'skills',
    'phases',
    'training_schedules',
    'activities',
    'conference',
    'division',
    'season',
    'staff',
    'world',
    'leagues',
    'depthChart'
];

export const DIFFICULTY = {
    Easy: -0.25,
    Normal: 0,
    Hard: 0.25,
    Insane: 1,
};

export type PHASE = {
    id: number;
    name: string;
    display_name: string;
    startWeek: number;
    endWeek: number;
};

export const DEFAULT_SCHEDULE: PHASE[] = [
    { id: 0, name: 'END_OF_SEASON', display_name: 'End of Season', startWeek: 7, endWeek: 8 },
    { id: 1, name: 'FREE_AGENCY', display_name: 'Free Agency', startWeek: 9, endWeek: 12 },
    { id: 2, name: 'SCOUTING_COMBINE', display_name: 'Scouting Combine', startWeek: 13, endWeek: 14 },
    { id: 3, name: 'PRO_DAYS', display_name: 'Pro Days', startWeek: 15, endWeek: 16 },
    { id: 4, name: 'DRAFT', display_name: 'Draft', startWeek: 17, endWeek: 18 },
    { id: 5, name: 'AFTER_DRAFT', display_name: 'Post-Draft Free Agency', startWeek: 19, endWeek: 20 },
    { id: 6, name: 'ROOKIE_MINICAMP', display_name: 'Rookie Minicamp', startWeek: 21, endWeek: 22 },
    { id: 7, name: 'OTA', display_name: 'Organized Team Activities', startWeek: 23, endWeek: 26 },
    { id: 8, name: 'TRAINING_CAMP', display_name: 'Training Camp', startWeek: 27, endWeek: 30 },
    { id: 9, name: 'PRESEASON', display_name: 'Preseason', startWeek: 31, endWeek: 34 },
    { id: 10, name: 'REGULAR_SEASON', display_name: 'Regular Season', startWeek: 35, endWeek: 44 },
    { id: 11, name: 'PLAYOFFS', display_name: 'Playoffs', startWeek: 45, endWeek: 1 },
    { id: 12, name: 'SUPER_BOWL', display_name: 'Super Bowl', startWeek: 2, endWeek: 3 },
    { id: 13, name: 'POST_SEASON', display_name: 'Post-Season', startWeek: 4, endWeek: 6 }
];

export type PLAYER_STATE = {
    FREE_AGENT: 1,
    RETIRED: 2,
    SIGNED: 3
};

export type PLAYER_CONTRACT = {
    amountPerYear: number,
    length: number,
    salaries: [],
    teamOption: false,
    playerOption: false
}

export type PLAYER_SALARY = {
    amount: number,
    season: number
}

export type PLAYER_INJURY = {
    gamesRemaining: number,
    type: string,
    severity: "Minor" | "Major" | "Career Ending"
}

export type BudgetItem = {
    amount: number,
    rank: number
}

export type GAME = {
    gid: null,
    homeTeam: {
        tid: number,
    },
    won: {
        tid: number,
        pts: number
    },
    lost: {
        tid: number,
        pts: number
    }
}

export const DEFAULT_CONFS = [
    {
        "cid": 0,
        "name": "American Conference",
    },
    {
        "cid": 1,
        "name": "National Conference",
    },

];

export const DEFAULT_DIVS = [
    {
        "did": 0,
        "cid": 0,
        "name": "East",
    },
    {
        "did": 1,
        "cid": 0,
        "name": "North",
    },
    {
        "did": 2,
        "cid": 0,
        "name": "South",
    },
    {
        "did": 3,
        "cid": 0,
        "name": "West",
    },
    {
        "did": 4,
        "cid": 1,
        "name": "East",
    },
    {
        "did": 5,
        "cid": 1,
        "name": "North",
    },
    {
        "did": 6,
        "cid": 1,
        "name": "South",
    },
    {
        "did": 7,
        "cid": 1,
        "name": "West",
    },
];

export const COACH_ROLES = [
    "Head Coach",
    "Offensive Coordinator",
    "Defensive Coordinator",
    "Quarterbacks Coach",
    "Running Backs Coach",
    "Wide Receivers Coach",
    "Tight Ends Coach",
    "Offensive Line Coach",
    "Defensive Line Coach",
    "Linebackers Coach",
    "Secondary Coach",
    "Strengh & Conditioning Coach",
    "Special Teams Coach",
    "Coach"
];

export const EXECUTIVE_ROLES = [
    "Owner",
    "President",
    "Chief Executive Officer",
];

export const FRONT_OFFICE_ROLES = [
    "General Manager",
    "Assistant General Manager",
    "Directory of Pro Scouting",
    "Director of College Scouting",
    "Scout"
];

export const SPORTS_MED_ROLES = [
    "Director of Sports Medicine",
    "Director of Sports Science",
    "Doctor",
    "Trainer",
    "Sports Scientist"
]

export const POSITIONS = [
    "QB",
    "RB",
    "WR",
    "TE",
    "OT",
    "OG",
    "C",
    "DE",
    "DT",
    "OLB",
    "MLB",
    "CB",
    "S",
    "K",
    "P",
];

export const DEPTH_CHART_POSITIONS = [
    "QB",
    "RB",
    "WR",
    "TE",
    "LT",
    "LG",
    "C",
    "RG",
    "RT",
    "LE",
    "RE",
    "DT",
    "LOLB",
    "MLB",
    "ROLB",
    "CB",
    "FS",
    "SS",
    "K",
    "P"
];

export const OFF_POSITIONS = [
    "QB",
    "RB",
    "WR",
    "TE",
    "OT",
    "OG",
    "C",
];

export const DEF_POSITIONS = [
    "DE",
    "DT",
    "OLB",
    "MLB",
    "CB",
    "S"
];

export const MAX_POSITION_COUNTS = {
    QB: 5,
    RB: 6,
    WR: 10,
    TE: 6,
    OT: 8,
    OG: 8,
    C: 6,
    DT: 8,
    DE: 8,
    OLB: 8,
    MLB: 6,
    CB: 8,
    S: 8,
    K: 2,
    P: 2
};

export const MIN_POSITION_COUNTS = {
    QB: 2,
    RB: 3,
    WR: 5,
    TE: 3,
    OT: 3,
    OG: 3,
    C: 2,
    DT: 3,
    DE: 4,
    OLB: 4,
    MLB: 3,
    CB: 4,
    S: 3,
    K: 1,
    P: 1
};

export const RATINGS = [
    "speed",
    "acceleration",
    "agility",
    "strength",
    "vertical",
    "stamina",
    "carrying",
    "catching",
    "route_running",
    "throw_power",
    "throw_accuracy_deep",
    "throw_accuracy_mid",
    "throw_accuracy_short",
    "throw_on_the_run",
    "play_action",
    "pass_blocking",
    "run_blocking",
    "shed_block",
    "tackle",
    "man_coverage",
    "zone_coverage",
    "punt_accuracy",
    "punt_power",
    "kick_accuracy",
    "kick_power",
];

export const POSITION_ARCHETYPES = {
    "QB": [
        "field_general",
        "scrambler",
        "improviser"
    ],
    "RB": [
        "eluvisve",
        "power",
        "receiving"
    ],
    "WR": [
        "deep_threat",
        "slot",
        "playmaker",
        "physical"
    ],
    "TE": [
        "vertical",
        "posession",
        "blocking"
    ],
    "OT": [
        "agile",
        "power",
        "pass_protector"
    ],
    "OG": [
        "agile",
        "power",
        "pass_protector"
    ],
    "C": [
        "agile",
        "power",
        "pass_protector"
    ],
    "DE": [
        "speed_rusher",
        "power_rusher",
        "run_stopper"
    ],
    "DT": [
        "speed_rusher",
        "power_rusher",
        "run_stopper"
    ],
    "OLB": [
        "speed_rusher",
        "power_rusher",
        "run_stopper",
        "pass_coverage"
    ],
    "MLB": [
        "defensive_leader",
        "pass_coverage",
        "run_stopper"
    ],
    "CB": [
        "zone",
        "man",
        "slot"
    ],
    "S": [
        "zone",
        "hybrid",
        "physical"
    ],
    "K": [
        "physical"
    ],
    "P": [
        "physical"
    ]
}

export const TECHNICAL_ARCHETYPES = {
    "field_general": {
        carrying: 0.25,
        catching: -1,
        kick_accuracy: -1,
        kick_power: -1,
        man_coverage: 0.25,
        pass_blocking: 0.25,
        play_action: 2,
        punt_accuracy: -1,
        punt_power: -1,
        route_running: -1,
        run_blocking: 0.25,
        shed_block: -1,
        tackle: 0.25,
        throw_accuracy_deep: 1.5,
        throw_accuracy_mid: 1.75,
        throw_accuracy_short: 2,
        throw_on_the_run: 2,
        throw_power: 2,
        zone_coverage: -1,
        speed: 0.25,
        acceleration: 0.25,
        agility: 0.25,
        strength: 0.25,
        vertical: 0.25,
        stamina: 0.25
    },
    "scrambler": {
        carrying: 1.75, // Increased as scramblers often run with the ball
        catching: -1,
        kick_accuracy: -1,
        kick_power: -1,
        man_coverage: 0.25,
        pass_blocking: 0.25,
        play_action: 1.5, // Slightly decreased as scramblers might rely less on play action
        punt_accuracy: -1,
        punt_power: -1,
        route_running: -1,
        run_blocking: 0.25,
        shed_block: -1,
        tackle: 0.25,
        throw_accuracy_deep: 1.25, // Slightly decreased as scramblers might not be as accurate
        throw_accuracy_mid: 1.5, // Slightly decreased as scramblers might not be as accurate
        throw_accuracy_short: 1.75, // Slightly decreased as scramblers might not be as accurate
        throw_on_the_run: 2, // Kept the same as scramblers often throw on the run
        throw_power: 1.75, // Slightly decreased as scramblers might not have as strong an arm
        zone_coverage: -1,
        speed: 2, // Increased as scramblers are typically fast
        acceleration: 2, // Increased as scramblers need to quickly change speed
        agility: 2, // Increased as scramblers need to evade defenders
        strength: 0.25,
        vertical: 0.25,
        stamina: 0.25
    },
    "improviser": {
        carrying: 0.75, // Increased as improvisers might run with the ball occasionally
        catching: -1,
        kick_accuracy: -1,
        kick_power: -1,
        man_coverage: 0.25,
        pass_blocking: 0.25,
        play_action: 2, // Kept the same as improvisers often rely on play action
        punt_accuracy: -1,
        punt_power: -1,
        route_running: -1,
        run_blocking: 0.25,
        shed_block: -1,
        tackle: 0.25,
        throw_accuracy_deep: 1.75, // Slightly increased as improvisers need to be accurate on the fly
        throw_accuracy_mid: 2, // Slightly increased as improvisers need to be accurate on the fly
        throw_accuracy_short: 2, // Kept the same as improvisers often throw short passes
        throw_on_the_run: 2, // Kept the same as improvisers often throw on the run
        throw_power: 1.75, // Slightly decreased as improvisers might not have as strong an arm
        zone_coverage: -1,
        speed: 1.5, // Decreased as improvisers might not be as fast as scramblers
        acceleration: 1.5, // Decreased as improvisers might not need to change speed as quickly
        agility: 1.75, // Increased as improvisers need to evade defenders
        strength: 0.25,
        vertical: 0.25,
        stamina: 0.25
    },
    "eluvisve": {
        carrying: 1.75, // Increased as elusive running backs often have good ball control
        catching: 1, // Increased as elusive running backs often are used in passing plays
        kick_accuracy: -1,
        kick_power: -1,
        man_coverage: -1,
        pass_blocking: 0.25,
        play_action: -1,
        punt_accuracy: -1,
        punt_power: -1,
        route_running: 1.5, // Increased as elusive running backs often have to run complex routes
        run_blocking: 1,
        shed_block: -1,
        tackle: -1,
        throw_accuracy_deep: -1,
        throw_accuracy_mid: -1,
        throw_accuracy_short: -1,
        throw_on_the_run: -1,
        throw_power: -1,
        zone_coverage: -1,
        speed: 2, // Increased as elusive running backs are typically fast
        acceleration: 2, // Increased as elusive running backs need to quickly change speed
        agility: 2, // Increased as elusive running backs need to evade defenders
        strength: 0.75, // Decreased as elusive running backs might not be as strong
        vertical: 1.25,
        stamina: 1.75 // Increased as elusive running backs often have to make many runs per game
    },
    "power": {
        carrying: 2, // Increased as power running backs often have good ball control and can break tackles
        catching: 1.25, // Slightly increased as power running backs can be used in short passing plays
        kick_accuracy: -1,
        kick_power: -1,
        man_coverage: -1,
        pass_blocking: 0.25,
        play_action: -1,
        punt_accuracy: -1,
        punt_power: -1,
        route_running: 0.75, // Slightly increased as power running backs can be used in short passing plays
        run_blocking: 1.25,
        shed_block: -1,
        tackle: -1,
        throw_accuracy_deep: -1,
        throw_accuracy_mid: -1,
        throw_accuracy_short: -1,
        throw_on_the_run: -1,
        throw_power: -1,
        zone_coverage: -1,
        speed: 1.25, // Decreased as power running backs might not be as fast
        acceleration: 1.25, // Decreased as power running backs might not need to change speed as quickly
        agility: 1, // Decreased as power running backs might not need to evade defenders as much
        strength: 2, // Increased as power running backs are typically strong
        vertical: 1,
        stamina: 1.75 // Increased as power running backs often have to make many runs per game
    },
    "receiving": {
        carrying: 1.25, // Slightly increased as receiving backs often have to secure the ball after a catch
        catching: 2.25, // Increased as receiving backs need to be good at catching passes
        kick_accuracy: -1,
        kick_power: -1,
        man_coverage: -1,
        pass_blocking: 0.25,
        play_action: -1,
        punt_accuracy: -1,
        punt_power: -1,
        route_running: 2, // Increased as receiving backs need to be good at running routes
        run_blocking: -1,
        shed_block: -1,
        tackle: -1,
        throw_accuracy_deep: -1,
        throw_accuracy_mid: -1,
        throw_accuracy_short: -1,
        throw_on_the_run: -1,
        throw_power: -1,
        zone_coverage: -1,
        speed: 2, // Increased as receiving backs often need to outrun defenders after a catch
        acceleration: 2, // Increased as receiving backs often need to quickly change speed after a catch
        agility: 2, // Increased as receiving backs often need to make quick cuts and changes of direction
        strength: 0.5, // Decreased as receiving backs might not need to be as strong
        vertical: 1.25,
        stamina: 1.25 // Slightly increased as receiving backs often have to run long routes
    },
    "deep_threat": {
        carrying: 0.25,
        catching: 2, // Increased as deep threats need to be good at catching long passes
        kick_accuracy: -1,
        kick_power: -1,
        man_coverage: 0.25,
        pass_blocking: 0.25,
        play_action: -1,
        punt_accuracy: -1,
        punt_power: -1,
        route_running: 0.75, // Slightly decreased as deep threats often run straight routes
        run_blocking: 0.25,
        shed_block: -1,
        tackle: 0.25,
        throw_accuracy_deep: 2, // Increased as deep threats need to be accurate on deep passes
        throw_accuracy_mid: 1.5,
        throw_accuracy_short: 1.25,
        throw_on_the_run: -1,
        throw_power: -1,
        zone_coverage: -1,
        speed: 2, // Increased as deep threats are typically fast
        acceleration: 1.75, // Increased as deep threats need to quickly reach top speed
        agility: 0.75, // Decreased as deep threats might not need to make quick cuts and changes of direction
        strength: 0.25,
        vertical: 2, // Increased as deep threats often need to jump high to catch long passes
        stamina: 0.25
    },
    "slot": {
        carrying: 0.25,
        catching: 2, // Increased as slot receivers need to be good at catching short passes
        kick_accuracy: -1,
        kick_power: -1,
        man_coverage: 0.25,
        pass_blocking: 0.25,
        play_action: -1,
        punt_accuracy: -1,
        punt_power: -1,
        route_running: 2, // Increased as slot receivers often run complex routes
        run_blocking: 0.25,
        shed_block: -1,
        tackle: 0.25,
        throw_accuracy_deep: 1.25, // Slightly increased as slot receivers might occasionally run deep routes
        throw_accuracy_mid: 1.75, // Increased as slot receivers often run intermediate routes
        throw_accuracy_short: 2, // Increased as slot receivers often run short routes
        throw_on_the_run: -1,
        throw_power: -1,
        zone_coverage: -1,
        speed: 1.5, // Slightly decreased as slot receivers might not need to be as fast
        acceleration: 1.75, // Increased as slot receivers often need to quickly change direction
        agility: 2, // Increased as slot receivers often need to make quick cuts
        strength: 0.25,
        vertical: 1, // Slightly decreased as slot receivers might not need to jump high
        stamina: 1.5 // Increased as slot receivers often have to run many routes per game
    },
    "playmaker": {
        carrying: 0.25,
        catching: 2, // Increased as slot receivers need to be good at catching short passes
        kick_accuracy: -1,
        kick_power: -1,
        man_coverage: 0.25,
        pass_blocking: 0.25,
        play_action: -1,
        punt_accuracy: -1,
        punt_power: -1,
        route_running: 2, // Increased as slot receivers often run complex routes
        run_blocking: 0.25,
        shed_block: -1,
        tackle: 0.25,
        throw_accuracy_deep: 1.25, // Slightly increased as slot receivers might occasionally run deep routes
        throw_accuracy_mid: 1.75, // Increased as slot receivers often run intermediate routes
        throw_accuracy_short: 2, // Increased as slot receivers often run short routes
        throw_on_the_run: -1,
        throw_power: -1,
        zone_coverage: -1,
        speed: 1.5, // Slightly decreased as slot receivers might not need to be as fast
        acceleration: 1.75, // Increased as slot receivers often need to quickly change direction
        agility: 2, // Increased as slot receivers often need to make quick cuts
        strength: 0.25,
        vertical: 1, // Slightly decreased as slot receivers might not need to jump high
        stamina: 1.5 // Increased as slot receivers often have to run many routes per game
    },
    "physical": {
        carrying: 0.25,
        catching: 2, // Increased as deep threats need to be good at catching long passes
        kick_accuracy: -1,
        kick_power: -1,
        man_coverage: 0.25,
        pass_blocking: 0.25,
        play_action: -1,
        punt_accuracy: -1,
        punt_power: -1,
        route_running: 0.75, // Slightly decreased as deep threats often run straight routes
        run_blocking: 0.25,
        shed_block: -1,
        tackle: 0.25,
        throw_accuracy_deep: 2, // Increased as deep threats need to be accurate on deep passes
        throw_accuracy_mid: 1.5,
        throw_accuracy_short: 1.25,
        throw_on_the_run: -1,
        throw_power: -1,
        zone_coverage: -1,
        speed: 2, // Increased as deep threats are typically fast
        acceleration: 1.75, // Increased as deep threats need to quickly reach top speed
        agility: 0.75, // Decreased as deep threats might not need to make quick cuts and changes of direction
        strength: 0.25,
        vertical: 2, // Increased as deep threats often need to jump high to catch long passes
        stamina: 0.25
    },
    "vertical": {
        carrying: 0.25,
        catching: 2, // Increased as vertical tight ends need to be good at catching long passes
        kick_accuracy: -1,
        kick_power: -1,
        man_coverage: 0.25,
        pass_blocking: 0.25,
        play_action: -1,
        punt_accuracy: -1,
        punt_power: -1,
        route_running: 0.75, // Slightly decreased as vertical tight ends often run straight routes
        run_blocking: 0.25,
        shed_block: -1,
        tackle: 0.25,
        throw_accuracy_deep: 2, // Increased as vertical tight ends need to be accurate on deep passes
        throw_accuracy_mid: 1.5,
        throw_accuracy_short: 1.25,
        throw_on_the_run: -1,
        throw_power: -1,
        zone_coverage: -1,
        speed: 2, // Increased as vertical tight ends are typically fast
        acceleration: 1.75, // Increased as vertical tight ends need to quickly reach top speed
        agility: 0.75, // Decreased as vertical tight ends might not need to make quick cuts and changes of direction
        strength: 0.25,
        vertical: 2, // Increased as vertical tight ends often need to jump high to catch long passes
        stamina: 0.25
    },
    "posession": {
        carrying: 0.25,
        catching: 2, // Increased as vertical tight ends need to be good at catching long passes
        kick_accuracy: -1,
        kick_power: -1,
        man_coverage: 0.25,
        pass_blocking: 0.25,
        play_action: -1,
        punt_accuracy: -1,
        punt_power: -1,
        route_running: 0.75, // Slightly decreased as vertical tight ends often run straight routes
        run_blocking: 0.25,
        shed_block: -1,
        tackle: 0.25,
        throw_accuracy_deep: 2, // Increased as vertical tight ends need to be accurate on deep passes
        throw_accuracy_mid: 1.5,
        throw_accuracy_short: 1.25,
        throw_on_the_run: -1,
        throw_power: -1,
        zone_coverage: -1,
        speed: 2, // Increased as vertical tight ends are typically fast
        acceleration: 1.75, // Increased as vertical tight ends need to quickly reach top speed
        agility: 0.75, // Decreased as vertical tight ends might not need to make quick cuts and changes of direction
        strength: 0.25,
        vertical: 2, // Increased as vertical tight ends often need to jump high to catch long passes
        stamina: 0.25
    },
    "blocking": {
        carrying: 0.25,
        catching: -1, // Decreased as blocking tight ends might not be involved in many passing plays
        kick_accuracy: -1,
        kick_power: -1,
        man_coverage: -1,
        pass_blocking: 2, // Increased as blocking tight ends need to be good at pass protection
        play_action: -1,
        punt_accuracy: -1,
        punt_power: -1,
        route_running: -1, // Decreased as blocking tight ends might not run many routes
        run_blocking: 2, // Increased as blocking tight ends need to be good at run blocking
        shed_block: -1,
        tackle: 0.25,
        throw_accuracy_deep: -1,
        throw_accuracy_mid: -1,
        throw_accuracy_short: -1,
        throw_on_the_run: -1,
        throw_power: -1,
        zone_coverage: -1,
        speed: 0.25, // Slightly decreased as blocking tight ends might not need to be as fast
        acceleration: 0.25,
        agility: 0.25,
        strength: 2, // Increased as blocking tight ends are typically strong
        vertical: 0.25,
        stamina: 1.5 // Increased as blocking tight ends often have to block for many plays per game
    },
    "agile": {
        carrying: -1,
        catching: -1,
        kick_accuracy: -1,
        kick_power: -1,
        man_coverage: -1,
        pass_blocking: 2, // Increased as agile linemen need to be good at pass protection
        play_action: -1,
        punt_accuracy: -1,
        punt_power: -1,
        route_running: -1,
        run_blocking: 1.5, // Slightly increased as agile linemen often have to block on the move
        shed_block: -1,
        tackle: 0.25,
        throw_accuracy_deep: -1,
        throw_accuracy_mid: -1,
        throw_accuracy_short: -1,
        throw_on_the_run: -1,
        throw_power: -1,
        zone_coverage: -1,
        speed: 0.75, // Slightly decreased as linemen might not need to be as fast
        acceleration: 1.75, // Increased as agile linemen often need to quickly change direction
        agility: 2, // Increased as agile linemen often need to make quick cuts
        strength: 1, // Slightly decreased as agile linemen might not need to be as strong
        vertical: -1,
        stamina: 1.5 // Increased as agile linemen often have to block for many plays per game
    },
    "run_blocker": {
        carrying: -1,
        catching: -1,
        kick_accuracy: -1,
        kick_power: -1,
        man_coverage: -1,
        pass_blocking: 0.75, // Slightly decreased as run blockers might not need to be as good at pass protection
        play_action: -1,
        punt_accuracy: -1,
        punt_power: -1,
        route_running: -1,
        run_blocking: 2, // Increased as run blockers need to be good at run blocking
        shed_block: -1,
        tackle: 0.25,
        throw_accuracy_deep: -1,
        throw_accuracy_mid: -1,
        throw_accuracy_short: -1,
        throw_on_the_run: -1,
        throw_power: -1,
        zone_coverage: -1,
        speed: 0.5, // Slightly decreased as run blockers might not need to be as fast
        acceleration: 0.75, // Slightly decreased as run blockers might not need to quickly change direction
        agility: 0.5, // Slightly decreased as run blockers might not need to make quick cuts
        strength: 2, // Increased as run blockers are typically strong
        vertical: -1,
        stamina: 1.75 // Increased as run blockers often have to block for many plays per game
    },
    "pass_protector": {
        carrying: -1,
        catching: -1,
        kick_accuracy: -1,
        kick_power: -1,
        man_coverage: -1,
        pass_blocking: 2, // Increased as pass protectors need to be good at pass protection
        play_action: -1,
        punt_accuracy: -1,
        punt_power: -1,
        route_running: -1,
        run_blocking: 0.75, // Slightly decreased as pass protectors might not need to be as good at run blocking
        shed_block: -1,
        tackle: 0.25,
        throw_accuracy_deep: -1,
        throw_accuracy_mid: -1,
        throw_accuracy_short: -1,
        throw_on_the_run: -1,
        throw_power: -1,
        zone_coverage: -1,
        speed: 0.5, // Slightly decreased as pass protectors might not need to be as fast
        acceleration: 1.5, // Increased as pass protectors often need to quickly change direction
        agility: 1.75, // Increased as pass protectors often need to make quick adjustments
        strength: 1, // Slightly decreased as pass protectors might not need to be as strong
        vertical: -1,
        stamina: 2 // Increased as pass protectors often have to block for long passing plays
    },
    "speed_rusher": {
        carrying: -1,
        catching: -1,
        kick_accuracy: -1,
        kick_power: -1,
        man_coverage: -1,
        pass_blocking: -1,
        play_action: -1,
        punt_accuracy: -1,
        punt_power: -1,
        route_running: -1,
        run_blocking: -1,
        shed_block: 2, // Increased as speed rushers need to quickly shed blocks
        tackle: 1.5, // Increased as speed rushers often need to tackle the quarterback
        throw_accuracy_deep: -1,
        throw_accuracy_mid: -1,
        throw_accuracy_short: -1,
        throw_on_the_run: -1,
        throw_power: -1,
        zone_coverage: -1,
        speed: 2, // Increased as speed rushers need to be fast
        acceleration: 2, // Increased as speed rushers need to quickly reach top speed
        agility: 1.75, // Increased as speed rushers often need to make quick adjustments
        strength: 0.75, // Slightly decreased as speed rushers rely more on speed than strength
        vertical: -1,
        stamina: 1 // Slightly decreased as speed rushers might not be involved in every play
    },
    "power_rusher": {
        carrying: -1,
        catching: -1,
        kick_accuracy: -1,
        kick_power: -1,
        man_coverage: -1,
        pass_blocking: -1,
        play_action: -1,
        punt_accuracy: -1,
        punt_power: -1,
        route_running: -1,
        run_blocking: -1,
        shed_block: 2, // Increased as power rushers need to overpower blockers
        tackle: 1.5, // Increased as power rushers often need to tackle the quarterback
        throw_accuracy_deep: -1,
        throw_accuracy_mid: -1,
        throw_accuracy_short: -1,
        throw_on_the_run: -1,
        throw_power: -1,
        zone_coverage: -1,
        speed: 1,
        acceleration: 1,
        agility: 1,
        strength: 1,
        vertical: 1,
        stamina: 1.5 // Slightly increased as power rushers might be involved in longer plays
    },
    "run_stopper": {
        carrying: -1,
        catching: -1,
        kick_accuracy: -1,
        kick_power: -1,
        man_coverage: -1,
        pass_blocking: 0.75, // Slightly decreased as run stoppers might not need to be as good at pass protection
        play_action: -1,
        punt_accuracy: -1,
        punt_power: -1,
        route_running: -1,
        run_blocking: 2, // Increased as run stoppers need to be good at stopping the run
        shed_block: -1,
        tackle: 2, // Increased as run stoppers often need to tackle the running back
        throw_accuracy_deep: -1,
        throw_accuracy_mid: -1,
        throw_accuracy_short: -1,
        throw_on_the_run: -1,
        throw_power: -1,
        zone_coverage: -1,
        speed: 1.25,
        acceleration: 1.25,
        agility: 1.5,
        strength: 1,
        vertical: 1,
        stamina: 1.75 // Increased as run stoppers often have to block for many plays per game
    },
    "pass_coverage": {
        carrying: -1,
        catching: 1.5, // Increased as pass coverage linebackers often need to intercept passes
        kick_accuracy: -1,
        kick_power: -1,
        man_coverage: 1.75, // Increased as pass coverage linebackers often need to cover receivers
        pass_blocking: -1,
        play_action: -1,
        punt_accuracy: -1,
        punt_power: -1,
        route_running: -1,
        run_blocking: 0.75, // Slightly decreased as pass coverage linebackers might not need to be as good at run stopping
        shed_block: 1, // Increased as pass coverage linebackers often need to shed blocks to get to the receiver
        tackle: 1, // Slightly decreased as pass coverage linebackers might not need to tackle as often
        throw_accuracy_deep: -1,
        throw_accuracy_mid: -1,
        throw_accuracy_short: -1,
        throw_on_the_run: -1,
        throw_power: -1,
        zone_coverage: 2, // Increased as pass coverage linebackers often need to cover zones
        speed: 1.75,
        acceleration: 1.75,
        agility: 1.75,
        strength: 1.25,
        vertical: 1,
        stamina: 1.75 // Increased as pass coverage linebackers often have to cover for many plays per game
    },
    "defensive_leader": {
        carrying: -1,
        catching: -1,
        kick_accuracy: -1,
        kick_power: -1,
        man_coverage: 0.5, // Slightly increased as defensive leaders might need to cover man-to-man occasionally
        pass_blocking: -1,
        play_action: -1,
        punt_accuracy: -1,
        punt_power: -1,
        route_running: -1,
        run_blocking: 0.5, // Slightly increased as defensive leaders might need to stop the run occasionally
        shed_block: 1, // Increased as defensive leaders often need to shed blocks to get to the ball carrier
        tackle: 2, // Increased as defensive leaders often need to make key tackles
        throw_accuracy_deep: -1,
        throw_accuracy_mid: -1,
        throw_accuracy_short: -1,
        throw_on_the_run: -1,
        throw_power: -1,
        zone_coverage: 2, // Increased as defensive leaders often need to cover zones
        speed: 1.25,
        acceleration: 1.25,
        agility: 1.5,
        strength: 1,
        vertical: 1,
        stamina: 2 // Increased as defensive leaders often have to be on the field for many plays
    },
    "zone": {
        carrying: -1,
        catching: 1.5, // Increased as zone coverage players often need to intercept passes
        kick_accuracy: -1,
        kick_power: -1,
        man_coverage: 0.75, // Slightly decreased as zone coverage players might not need to cover man-to-man as often
        pass_blocking: -1,
        play_action: -1,
        punt_accuracy: -1,
        punt_power: -1,
        route_running: -1,
        run_blocking: -1,
        shed_block: -1,
        tackle: 0.75, // Slightly decreased as zone coverage players might not need to tackle as often
        throw_accuracy_deep: -1,
        throw_accuracy_mid: -1,
        throw_accuracy_short: -1,
        throw_on_the_run: -1,
        throw_power: -1,
        zone_coverage: 2, // Increased as zone coverage players often need to cover zones
        speed: 2, // Increased as zone coverage players need to be fast to cover large areas
        acceleration: 2, // Increased as zone coverage players need to quickly change direction
        agility: 2, // Increased as zone coverage players often need to make quick adjustments
        strength: 0.5, // Slightly decreased as zone coverage players might not need to be as strong
        vertical: 1.5, // Increased as zone coverage players often need to jump to intercept passes
        stamina: 1.75 // Increased as zone coverage players often have to cover for many plays per game
    },
    "man": {
        carrying: -1,
        catching: 1.5, // Increased as man coverage players often need to intercept passes
        kick_accuracy: -1,
        kick_power: -1,
        man_coverage: 2, // Increased as man coverage players often need to cover receivers one-on-one
        pass_blocking: -1,
        play_action: -1,
        punt_accuracy: -1,
        punt_power: -1,
        route_running: -1,
        run_blocking: -1,
        shed_block: -1,
        tackle: 0.75, // Slightly decreased as man coverage players might not need to tackle as often
        throw_accuracy_deep: -1,
        throw_accuracy_mid: -1,
        throw_accuracy_short: -1,
        throw_on_the_run: -1,
        throw_power: -1,
        zone_coverage: 0.75, // Slightly decreased as man coverage players might not need to cover zones as often
        speed: 2, // Increased as man coverage players need to be fast to keep up with receivers
        acceleration: 2, // Increased as man coverage players need to quickly change direction
        agility: 2, // Increased as man coverage players often need to make quick adjustments
        strength: 0.5, // Slightly decreased as man coverage players might not need to be as strong
        vertical: 1.5, // Increased as man coverage players often need to jump to intercept passes
        stamina: 1.75 // Increased as man coverage players often have to cover for many plays per game
    },
    "hybrid": {
        carrying: -1,
        catching: 1.5, // Increased as hybrid players often need to intercept passes
        kick_accuracy: -1,
        kick_power: -1,
        man_coverage: 1.75, // Increased as hybrid players often need to cover receivers one-on-one
        pass_blocking: -1,
        play_action: -1,
        punt_accuracy: -1,
        punt_power: -1,
        route_running: -1,
        run_blocking: -1,
        shed_block: -1,
        tackle: 0.75, // Slightly decreased as hybrid players might not need to tackle as often
        throw_accuracy_deep: -1,
        throw_accuracy_mid: -1,
        throw_accuracy_short: -1,
        throw_on_the_run: -1,
        throw_power: -1,
        zone_coverage: 1.75, // Increased as hybrid players often need to cover zones
        speed: 2, // Increased as hybrid players need to be fast to cover large areas
        acceleration: 2, // Increased as hybrid players need to quickly change direction
        agility: 2, // Increased as hybrid players often need to make quick adjustments
        strength: 0.5, // Slightly decreased as hybrid players might not need to be as strong
        vertical: 1.5, // Increased as hybrid players often need to jump to intercept passes
        stamina: 1.75 // Increased as hybrid players often have to cover for many plays per game
    }
}

export const MENTAL_ARCHETYPES = {
    "leader": {
        aggression: 0.5,
        anticipation: 1,
        bravery: 1.25,
        composure: 2, // Increased as leaders need to stay composed under pressure
        concentration: 1.5,
        decisions: 2, // Increased as leaders often need to make key decisions
        determination: 1.75,
        flair: 0.5,
        leadership: 2, // Increased as this is a key attribute for leaders
        off_the_ball: 0.75,
        positioning: 1,
        teamwork: 1.75, // Increased as leaders often need to work well with their team
        vision: 1.5,
        work_rate: 1.75 // Increased as leaders often have a high work rate
    },
    "competitor": {
        aggression: 2, // Increased as competitors are often aggressive
        anticipation: 1,
        bravery: 1.5, // Increased as competitors often need to be brave
        composure: 1,
        concentration: 1,
        decisions: 1,
        determination: 2, // Increased as competitors are often determined
        flair: 0.75,
        leadership: 0.75,
        off_the_ball: 1,
        positioning: 1,
        teamwork: 1,
        vision: 1.25,
        work_rate: 2 // Increased as competitors often have a high work rate
    },
    "strategist": {
        aggression: 0.5,
        anticipation: 2, // Increased as strategists need to anticipate plays
        bravery: 0.75,
        composure: 1.5, // Increased as strategists need to stay composed to make strategic decisions
        concentration: 1.75, // Increased as strategists need to concentrate to analyze the game
        decisions: 2, // Increased as strategists often need to make key decisions
        determination: 1,
        flair: 0.75,
        leadership: 1.25, // Increased as strategists often lead the team with their game plan
        off_the_ball: 1,
        positioning: 1.5, // Increased as strategists need to position themselves effectively
        teamwork: 1.25, // Increased as strategists often need to work well with their team
        vision: 2, // Increased as this is a key attribute for strategists
        work_rate: 1.25 // Increased as strategists often have a high work rate
    },
    "teamPlayer": {
        aggression: 0.5,
        anticipation: 0.75,
        bravery: 0.75,
        composure: 1.5, // Increased as team players need to stay composed under pressure
        concentration: 1,
        decisions: 1,
        determination: 1,
        flair: 0.75,
        leadership: 1, // Increased as team players often need to lead by example
        off_the_ball: 1,
        positioning: 1,
        teamwork: 2, // Increased as this is a key attribute for team players
        vision: 1,
        work_rate: 1.75 // Increased as team players often have a high work rate
    },
    "disruptor": {
        aggression: 2, // Increased as disruptors are often aggressive
        anticipation: 0.75,
        bravery: 2, // Increased as disruptors often need to be brave
        composure: 0.5, // Decreased as disruptors might lose their composure
        concentration: 0.75,
        decisions: 0.75,
        determination: 2, // Increased as disruptors are often determined
        flair: 1.5, // Increased as disruptors often have a unique style of play
        leadership: 0.5, // Decreased as disruptors might not be the best leaders
        off_the_ball: 1,
        positioning: 1,
        teamwork: 0.5, // Decreased as disruptors might not work well with the team
        vision: 0.75,
        work_rate: 1.5 // Increased as disruptors often have a high work rate
    },
}