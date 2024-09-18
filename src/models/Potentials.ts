import { Model } from '@vuex-orm/core'

class Potentials extends Model {
    static entity = 'potentials'
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

    id!: number
    rating_id!: number
    QB!: number
    RB!: number
    WR!: number
    TE!: number
    OL!: number
    DL!: number
    LB!: number
    CB!: number
    S!: number
    K!: number
    P!: number
}

export default Potentials