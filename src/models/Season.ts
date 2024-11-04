import { Model } from 'pinia-orm'

export default class Season extends Model {
    static entity = 'seasons'

    static fields () {
        return {
            id: this.uid(),
            tid: this.attr(null),
            cid: this.attr(null),
            did: this.attr(null),
            region: this.attr(''),
            name: this.attr(''),
            abbrev: this.attr(''),
            imgURL: this.attr(''),
            colors: this.attr([]),
            jersey: this.attr(''),
            season: this.attr(null),
            gp: this.attr(0),
            gpHome: this.attr(0),
            att: this.attr(0),
            cash: this.attr(0),
            won: this.attr(0),
            lost: this.attr(0),
            tied: this.attr(0),
            otl: this.attr(0),
            wonHome: this.attr(0),
            lostHome: this.attr(0),
            tiedHome: this.attr(0),
            otlHome: this.attr(0),
            wonAway: this.attr(0),
            lostAway: this.attr(0),
            tiedAway: this.attr(0),
            otlAway: this.attr(0),
            wonDiv: this.attr(0),
            lostDiv: this.attr(0),
            tiedDiv: this.attr(0),
            otlDiv: this.attr(0),
            wonConf: this.attr(0),
            lostConf: this.attr(0),
            tiedConf: this.attr(0),
            otlConf: this.attr(0),
            lastTen: this.attr([]),
            streak: this.attr(0),
            playoffRoundsWon: this.attr(-1),
            hype: this.attr(0),
            pop: this.attr(0),
            stadiumCapacity: this.attr(0),
            revenues: this.attr(null),
            expenses: this.attr(null),
            payrollEndOfSeason: this.attr(-1),
            ownerMood: this.attr(null),
            numPlayersTradedAway: this.attr(0),
            rid: this.attr(null)
        }
    }

    static piniaOptions = {
        persist: true
    }

    declare id: number
    declare tid: number
    declare cid: number
    declare did: number
    declare region: string
    declare name: string
    declare abbrev: string
    declare imgURL: string
    declare colors: string
    declare jersey: string
    declare season: number
    declare gp: number
    declare gpHome: number
    declare att: number
    declare cash: number
    declare won: number
    declare lost: number
    declare tied: number
    declare otl: number
    declare wonHome: number
    declare lostHome: number
    declare tiedHome: number
    declare otlHome: number
    declare wonAway: number
    declare lostAway: number
    declare tiedAway: number
    declare otlAway: number
    declare wonDiv: number
    declare lostDiv: number
    declare tiedDiv: number
    declare otlDiv: number
    declare wonConf: number 
    declare lostConf: number
    declare tiedConf: number
    declare otlConf: number
    declare lastTen: string
    declare streak: number
    declare playoffRoundsWon: number
    declare hype: number
    declare pop: number
    declare stadiumCapacity: number
    declare revenues: number
    declare expenses: number
    declare jeopardyEndOfSeason: number
    declare ownerMood: number
    declare numPlayersTradedAway: number    
    declare rid: number
}
