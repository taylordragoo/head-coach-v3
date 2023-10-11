import { Model } from '@vuex-orm/core'

export default class Transaction extends Model {
    static entity = 'transaction'
    static fields () {
        return {
            id: this.uid(),
            pid: this.attr(null),
            tid: this.attr(null),
            year: this.number(null)
        }
    }
}
