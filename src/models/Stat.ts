import { Model } from 'pinia-orm'

class Stat extends Model {
    static entity = 'stats'

    static fields () {
        return {
            id: this.uid(),
            playoffs: this.attr(false),
            season: this.attr(0),
            teamId: this.attr(0),
            yearsWithTeam: this.attr(0),
            av: this.attr(0),
            qbWin: this.attr(0),
            qbLoss: this.attr(0),
            qbTie: this.attr(0),
            qbOTL: this.attr(0),
            gamesPlayed: this.attr(0),
            gamesStarted: this.attr(0),
            minutes: this.attr(0),
            fumble: this.attr(0),
            fumbleLost: this.attr(0),
            passCompletion: this.attr(0),
            passAttempts: this.attr(0),
            passYards: this.attr(0),
            passTouchdowns: this.attr(0),
            passInterceptions: this.attr(0),
            passLongest: this.attr(0),
            passSacked: this.attr(0),
            passSackedYards: this.attr(0),
            rushAttempts: this.attr(0),
            rushYards: this.attr(0),
            rushTouchdowns: this.attr(0),
            rushLongest: this.attr(0),
            target: this.attr(0),
            reception: this.attr(0),
            receptionYards: this.attr(0),
            receptionTouchdowns: this.attr(0),
            receptionLongest: this.attr(0),
            puntReturn: this.attr(0),
            puntReturnYards: this.attr(0),
            puntReturnTouchdowns: this.attr(0),
            puntReturnLongest: this.attr(0),
            kickReturn: this.attr(0),
            kickReturnYards: this.attr(0),
            kickReturnTouchdowns: this.attr(0),
            kickReturnLongest: this.attr(0),
            defenseInterception: this.attr(0),
            defenseInterceptionYards: this.attr(0),
            defenseInterceptionTouchdowns: this.attr(0),
            defenseInterceptionLongest: this.attr(0),
            defensePassDefended: this.attr(0),
            defenseFumbleForced: this.attr(0),
            defenseFumbleRecovered: this.attr(0),
            defenseFumbleYards: this.attr(0),
            defenseFumbleTouchdowns: this.attr(0),
            defenseFumbleLongest: this.attr(0),
            defenseSacked: this.attr(0),
            defenseTacklesSolo: this.attr(0),
            defenseTacklesAssisted: this.attr(0),
            defenseTacklesLoss: this.attr(0),
            defenseSafety: this.attr(0),
            fieldGoal0: this.attr(0),
            fieldGoalAttempts0: this.attr(0),
            fieldGoal20: this.attr(0),
            fieldGoalAttempts20: this.attr(0),
            fieldGoal30: this.attr(0),
            fieldGoalAttempts30: this.attr(0),
            fieldGoal40: this.attr(0),
            fieldGoalAttempts40: this.attr(0),
            fieldGoal50: this.attr(0),
            fieldGoalAttempts50: this.attr(0),
            fieldGoalLongest: this.attr(0),
            extraPoints: this.attr(0),
            extraPointAttempts: this.attr(0),
            punt: this.attr(0),
            puntYards: this.attr(0),
            puntLongest: this.attr(0),
            puntTouchbacks: this.attr(0),
            puntInside20: this.attr(0),
            puntBlocked: this.attr(0),
            penalties: this.attr(0),
            penaltyYards: this.attr(0),
            jerseyNumber: this.attr(""),
            blockedAttempts: this.attr(0),
            puntsMade: this.attr(0)
        }
    }

    static piniaOptions = {
        persist: true
    }

    declare id: number
    declare playoffs: boolean
    declare season: number
    declare teamId: number
    declare yearsWithTeam: number
    declare av: number
    declare qbWin: number
    declare qbLoss: number
    declare qbTie: number
    declare qbOTL: number
    declare gamesPlayed: number
    declare gamesStarted: number
    declare minutes: number
    declare fumble: number
    declare fumbleLost: number
    declare passCompletion: number
    declare passAttempts: number
    declare passYards: number
    declare passTouchdowns: number
    declare passInterceptions: number
    declare passLongest: number
    declare passSacked: number
    declare passSackedYards: number
    declare rushAttempts: number
    declare rushYards: number
    declare rushTouchdowns: number
    declare rushLongest: number 
    declare target: number
    declare reception: number    
    declare receptionYards: number
    declare receptionTouchdowns: number
    declare receptionLongest: number
    declare puntReturn: number
    declare puntReturnYards: number
    declare puntReturnTouchdowns: number
    declare puntReturnLongest: number
    declare kickReturn: number
    declare kickReturnYards: number
    declare kickReturnTouchdowns: number
    declare kickReturnLongest: number
    declare defenseInterception: number
    declare defenseInterceptionYards: number
    declare defenseInterceptionTouchdowns: number
    declare defenseInterceptionLongest: number
    declare defensePassDefended: number
    declare defenseFumbleForced: number
    declare defenseFumbleRecovered: number
    declare defenseFumbleYards: number
    declare defenseFumbleTouchdowns: number
    declare defenseFumbleLongest: number    
    declare defenseSacked: number
    declare defenseTacklesSolo: number
    declare defenseTacklesAssisted: number
    declare defenseTacklesLoss: number
    declare defenseSafety: number
    declare fieldGoal0: number
    declare fieldGoalAttempts0: number
    declare fieldGoal20: number
    declare fieldGoalAttempts20: number
    declare fieldGoal30: number
    declare fieldGoalAttempts30: number
    declare fieldGoal40: number
    declare fieldGoalAttempts40: number
    declare fieldGoal50: number
    declare fieldGoalAttempts50: number
    declare fieldGoalLongest: number
    declare extraPoints: number
    declare extraPointAttempts: number
    declare punt: number
    declare puntYards: number
    declare puntLongest: number
    declare puntTouchbacks: number
    declare puntInside20: number
    declare puntBlocked: number
    declare penalties: number
    declare penaltyYards: number
    declare jerseyNumber: string
    declare blockedAttempts: number
    declare puntsMade: number
}

export default Stat
