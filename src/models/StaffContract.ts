import { Model } from 'pinia-orm'

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

    static piniaOptions = {
        persist: true
    }

    declare id: number
    declare staff_id: number
    declare amount: number
    declare expires: number
}
