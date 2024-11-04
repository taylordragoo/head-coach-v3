import { Model } from 'pinia-orm'

export default class Overalls extends Model {
    static entity: string = 'overalls'

    static fields () {
        return {
            id: this.uid(),
            rating_id: this.attr(null),
            QB: this.number(null),
            RB: this.number(null),
            WR: this.number(null),
            TE: this.number(null),
            OL: this.number(null),
            DL: this.number(null),
            LB: this.number(null),
            CB: this.number(null),
            S: this.number(null),
            K: this.number(null),
            P: this.number(null)
        }
    }

    static piniaOptions = {
        persist: true
    }

    declare id: number
    declare rating_id: number
    declare QB: number
    declare RB: number
    declare WR: number
    declare TE: number
    declare OL: number
    declare DL: number
    declare LB: number
    declare CB: number
    declare S: number
    declare K: number
    declare P: number
}
