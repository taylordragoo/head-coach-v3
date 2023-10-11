import { Model } from '@vuex-orm/core'

export default class Overalls extends Model {
    static entity = 'overalls'

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
}
