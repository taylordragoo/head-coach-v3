import User from '@/models/User';
import World from '@/models/World';
import League from '@/models/League';
import Team from '@/models/Team';
import Player from '@/models/Player';
import TrainingSchedule from "@/models/TrainingSchedule";
import Activity from "@/models/Activity";
import Match from "@/models/Match";
import Born from "@/models/Born";
import College from "@/models/College";
import Conference from "@/models/Conference";
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

export interface IConfig {
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
    relatives: Relative,
    overalls: Overalls,
    potentials: Potentials,
    skills: Skill,
    phases: Phase,
    training_schedules: TrainingSchedule,
    activities: Activity,
    conference: Conference,
    division: Division,
    Season: Season,
    staff: Staff,
    leagues: League,
    world: World,
}