import { Model } from '@vuex-orm/core'

export default class Salary extends Model {
    static entity = 'salaries'
    static fields () {
        return {
            id: this.uid(),
            amount: this.number(null),
            season: this.number(null),
            option: this.string('').nullable()
        }
    }

    declare id: number
    declare amount: number
    declare season: number
    declare option: string
}
