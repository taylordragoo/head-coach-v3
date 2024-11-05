import { Model } from '@vuex-orm/core'

export default class Phase extends Model {
    static entity = 'phase'
    static fields () {
        return {
            id: this.attr(null),
            startWeek: this.number(1),
            endWeek: this.number(2),
        }
    }
}
