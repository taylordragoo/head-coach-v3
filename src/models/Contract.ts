import { Model } from '@vuex-orm/core'

export default class Contract extends Model {
    static entity = 'contracts'
    static fields () {
        return {
            id: this.uid(),
            pid: this.attr(null),
            amount: this.number(null),
            expires: this.number(null)
        }
    }
}
