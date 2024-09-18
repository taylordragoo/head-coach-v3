import { Model } from "@vuex-orm/core";

export default class Season extends Model {
    static entity = 'seasons'

    static fields () {
        return {
            id: this.attr(null),
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
}
