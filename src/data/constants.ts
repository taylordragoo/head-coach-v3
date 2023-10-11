export const DIFFICULTY = {
    Easy: -0.25,
    Normal: 0,
    Hard: 0.25,
    Insane: 1,
};

export type PHASE = {
    id: number,
    name: string;
    display_name: string;
    startWeek: number;
    endWeek: number;
};

export const DEFAULT_SCHEDULE: PHASE[] = [
    { id: 0, name: 'BEFORE_DRAFT', display_name: 'Offseason', startWeek: 7, endWeek: 16 },
    { id: 1, name: 'DRAFT', display_name: 'Draft', startWeek: 17, endWeek: 18 },
    { id: 2, name: 'AFTER_DRAFT', display_name: 'Mini-Camps', startWeek: 19, endWeek: 22 },
    { id: 3, name: 'FREE_AGENCY', display_name: 'Free Agency', startWeek: 23, endWeek: 27 },
    { id: 4, name: 'TRAINING_CAMP', display_name: 'Training Camp', startWeek: 28, endWeek: 31 },
    { id: 5, name: 'PRESEASON', display_name: 'Preseason', startWeek: 32, endWeek: 35 },
    { id: 6, name: 'REGULAR_SEASON', display_name: 'Regular Season', startWeek: 36, endWeek: 44 },
    { id: 7, name: 'AFTER_TRADE_DEADLINE', display_name: 'Regular Season', startWeek: 45, endWeek: 1 },
    { id: 8, name: 'PLAYOFFS', display_name: 'Playoffs', startWeek: 2, endWeek: 4 },
    { id: 9, name: 'SUPER_BOWL', display_name: 'Super Bowl', startWeek: 5, endWeek: 6 },
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

export const PLAYER_GAME_STATS = {
    passing: {
        name: "Passing",
        stats: [
            "pssCmp",
            "pss",
            "cmpPct",
            "pssYds",
            "pssTD",
            "pssInt",
            "pssSk",
            "pssSkYds",
            "qbRat",
            "fmbLost",
            "fp",
        ],
        sortBy: ["pssYds"],
    },
    rushing: {
        name: "Rushing",
        stats: [
            "rus",
            "rusYds",
            "rusYdsPerAtt",
            "rusLng",
            "rusTD",
            "fmbLost",
            "fp",
        ],
        sortBy: ["rusYds"],
    },
    receiving: {
        name: "Receiving",
        stats: ["tgt", "rec", "recYds", "recYdsPerAtt", "recLng", "recTD", "fp"],
        sortBy: ["recYds"],
    },
    kicking: {
        name: "Kicking",
        stats: [
            "fg",
            "fga",
            "fgPct",
            "fgLng",
            "xp",
            "xpa",
            "xpPct",
            "kickingPts",
            "fp",
        ],
        sortBy: ["kickingPts"],
    },
    punting: {
        name: "Punting",
        stats: ["pnt", "pntYdsPerAtt", "pntIn20", "pntTB", "pntLng", "pntBlk"],
        sortBy: ["pnt"],
    },
    returns: {
        name: "Returns",
        stats: [
            "kr",
            "krYds",
            "krYdsPerAtt",
            "krLng",
            "krTD",
            "pr",
            "prYds",
            "prYdsPerAtt",
            "prLng",
            "prTD",
        ],
        sortBy: ["krYds", "prYds"],
    },
    defense: {
        name: "Defense",
        stats: [
            "defTckSolo",
            "defTckAst",
            "defTck",
            "defTckLoss",
            "defSk",
            "defSft",
            "defPssDef",
            "defInt",
            "defIntYds",
            "defIntTD",
            "defIntLng",
            "defFmbFrc",
            "defFmbRec",
            "defFmbYds",
            "defFmbTD",
            "defFmbLng",
        ],
        sortBy: ["defTck"],
    },
};

export const PLAYER_SUMMARY = {
    summaryPss: {
        name: "SummaryQB",
        onlyShowIf: ["QB"],
        stats: [
            "gp",
            "av",
            "qbRec",
            "cmpPct",
            "pssYds",
            "pssYdsPerAtt",
            "pssTD",
            "pssInt",
        ],
    },
    summaryRus: {
        name: "SummaryRus",
        onlyShowIf: ["RB"],
        stats: ["gp", "av", "rus", "rusYds", "rusYdsPerAtt", "rusTD"],
    },
    summaryRec: {
        name: "SummaryRec",
        onlyShowIf: ["WR", "TE"],
        stats: ["gp", "av", "rec", "recYds", "recYdsPerRec", "recTD"],
    },
    summaryOL: {
        name: "SummaryOL",
        onlyShowIf: ["OL"],
        stats: ["gp", "av"],
    },
    summaryKic: {
        name: "SummaryKic",
        onlyShowIf: ["K"],
        stats: ["gp", "av", "fg", "fga", "xp", "xpa"],
    },
    summaryPunt: {
        name: "SummaryPunt",
        onlyShowIf: ["P"],
        stats: ["gp", "av", "pnt", "pntYds", "pntYdsPerAtt"],
    },
    summaryDef: {
        name: "SummaryDef",
        onlyShowIf: ["DL", "LB", "CB", "S"],
        stats: ["gp", "av", "defTck", "defSk", "defFmbRec", "defInt"],
    },
};

export const PLAYER_STATS_TABLES = {
    passing: {
        name: "Passing",
        onlyShowIf: ["pss"],
        stats: [
            "gp",
            "gs",
            "qbRec",
            "pssCmp",
            "pss",
            "cmpPct",
            "pssYds",
            "pssTD",
            "pssTDPct",
            "pssInt",
            "pssIntPct",
            "pssLng",
            "pssYdsPerAtt",
            "pssAdjYdsPerAtt",
            "pssYdsPerCmp",
            "pssYdsPerGame",
            "qbRat",
            "pssSk",
            "pssSkYds",
            "pssNetYdsPerAtt",
            "pssAdjNetYdsPerAtt",
            "pssSkPct",
            "fp",
            "av",
        ],
    },
    rushing: {
        name: "Rushing and Receiving",
        onlyShowIf: ["rus", "rec"],
        stats: [
            "gp",
            "gs",
            "rus",
            "rusYds",
            "rusTD",
            "rusLng",
            "rusYdsPerAtt",
            "rusYdsPerGame",
            "rusPerGame",
            "tgt",
            "rec",
            "recYds",
            "recTD",
            "recLng",
            "recYdsPerRec",
            "recPerGame",
            "recYdsPerGame",
            "recCatchPct",
            "touches",
            "ydsPerTouch",
            "ydsFromScrimmage",
            "rusRecTD",
            "fmb",
            "fp",
            "av",
        ],
    },
    defense: {
        name: "Defense, Fumbles, and Penalties",
        onlyShowIf: ["gp"],
        stats: [
            "gp",
            "gs",
            "defInt",
            "defIntYds",
            "defIntTD",
            "defIntLng",
            "defPssDef",
            "defFmbFrc",
            "defFmbRec",
            "defFmbYds",
            "defFmbTD",
            "defFmbLng",
            "defSk",
            "defTck",
            "defTckSolo",
            "defTckAst",
            "defTckLoss",
            "defSft",
            "fmb",
            "fmbLost",
            "pen",
            "penYds",
            "av",
        ],
    },
    kicking: {
        name: "Kicking and Punting",
        onlyShowIf: ["fga", "xpa", "pnt"],
        stats: [
            "gp",
            "gs",
            "fg0",
            "fga0",
            "fg20",
            "fga20",
            "fg30",
            "fga30",
            "fg40",
            "fga40",
            "fg50",
            "fga50",
            "fgLng",
            "fg",
            "fga",
            "fgPct",
            "xp",
            "xpa",
            "xpPct",
            "pnt",
            "pntYds",
            "pntLng",
            "pntBlk",
            "pntYdsPerAtt",
            "fp",
            "av",
        ],
    },
    returns: {
        name: "Kick and Punt Returns",
        onlyShowIf: ["pr", "kr"],
        stats: [
            "gp",
            "gs",
            "pr",
            "prYds",
            "prTD",
            "prLng",
            "prYdsPerAtt",
            "kr",
            "krYds",
            "krTD",
            "krLng",
            "krYdsPerAtt",
            "allPurposeYds",
            "av",
        ],
    },
};

export const TEAM_STATS_TABLES = {
    team: {
        name: "Team",
        stats: [
            "pts",
            "yds",
            "ply",
            "ydsPerPlay",
            "tov",
            "fmbLost",
            "pssCmp",
            "pss",
            "pssYds",
            "pssTD",
            "pssInt",
            "pssNetYdsPerAtt",
            "rus",
            "rusYds",
            "rusTD",
            "rusYdsPerAtt",
            "pen",
            "penYds",
            "drives",
            "drivesScoringPct",
            "drivesTurnoverPct",
            "avgFieldPosition",
            "timePerDrive",
            "playsPerDrive",
            "ydsPerDrive",
            "ptsPerDrive",
        ],
    },
    opponent: {
        name: "Opponent",
        stats: [
            "oppPts",
            "oppYds",
            "oppPly",
            "oppYdsPerPlay",
            "oppTov",
            "oppFmbLost",
            "oppPssCmp",
            "oppPss",
            "oppPssYds",
            "oppPssTD",
            "oppPssInt",
            "oppPssNetYdsPerAtt",
            "oppRus",
            "oppRusYds",
            "oppRusTD",
            "oppRusYdsPerAtt",
            "oppPen",
            "oppPenYds",
            "oppDrives",
            "oppDrivesScoringPct",
            "oppDrivesTurnoverPct",
            "oppAvgFieldPosition",
            "oppTimePerDrive",
            "oppPlaysPerDrive",
            "oppYdsPerDrive",
            "oppPtsPerDrive",
        ],
    },
};

export const POSITIONS = [
    "QB",
    "RB",
    "FB",
    "WR",
    "TE",
    "LT",
    "LG",
    "C",
    "RG",
    "RT",
    "DT",
    "LE",
    "RE",
    "OLB",
    "MLB",
    "CB",
    "FS",
    "SS",
    "K",
    "P",
    "KR",
    "PR",
];

export const MAX_POSITION_COUNTS = {
    QB: 4,
    RB: 5,
    FB: 2,
    WR: 7,
    TE: 4,
    LT: 3,
    LG: 3,
    C: 3,
    RG: 3,
    RT: 3,
    DT: 6,
    LE: 4,
    RE: 4,
    OLB: 6,
    MLB: 4,
    CB: 6,
    FS: 3,
    SS: 3,
    K: 1,
    P: 1,
};

export const MIN_POSITION_COUNTS = {
    QB: 2,
    RB: 2,
    FB: 1,
    WR: 5,
    TE: 2,
    LT: 1,
    LG: 1,
    C: 1,
    RG: 1,
    RT: 1,
    DT: 2,
    LE: 1,
    RE: 1,
    OLB: 2,
    MLB: 2,
    CB: 4,
    FS: 1,
    SS: 1,
    K: 1,
    P: 1,
};

export const RATINGS = [
    "HGT",
    "STR",
    "SPD",
    "END",
    "THP",
    "THA",
    "bsc",
    "elu",
    "rtr",
    "hnd",
    "rbk",
    "pbk",
    "pcv",
    "tck",
    "prs",
    "rns",
    "kpw",
    "kac",
    "ppw",
    "pac",
];
