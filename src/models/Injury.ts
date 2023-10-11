import { Model } from '@vuex-orm/core'

export default class Injury extends Model {
    static entity = 'injury'
    static fields () {
        return {
            id: this.uid(),
            pid: this.attr(null),
            type: this.string(''),
            daysRemaining: this.attr(null)
        }
    }
}
