import { Model } from '@vuex-orm/core'

export default class StaffContract extends Model {
    static entity = 'staff_contract'
    static fields () {
        return {
            id: this.uid(),
            staff_id: this.attr(null),
            amount: this.number(null),
            expires: this.number(null)
        }
    }
}
