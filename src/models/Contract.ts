import { Model } from '@vuex-orm/core'
import Person from '@/models/Person'
import Salary from '@/models/Salary'

export default class Contract extends Model {
    static entity = 'contracts'
    static fields () {
        return {
            id: this.uid(),
            person_id: this.attr(null),
            amount: this.number(null),
            expires: this.number(null),
            type: this.attr(''),

            person: this.belongsTo(Person, 'person_id'),
            salaries: this.hasMany(Salary, 'contract_id')
        }
    }

    declare id: number
    declare person_id: number
    declare amount: number
    declare expires: number
    declare type: string

    declare person: Person
    declare salaries: Salary
}
