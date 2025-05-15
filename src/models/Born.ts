import { Model } from '@vuex-orm/core'
import Person from '@/models/Person'

export default class Born extends Model {
    static entity = 'born'
    static fields () {
        return {
            id: this.uid(),
            person_id: this.attr(null),
            year: this.number(null),
            location: this.string(''),
            person: this.belongsTo(Person, 'person_id')
        }
    }

    declare id: number
    declare person_id: number
    declare year: number
    declare location: string
    declare person: Person
}
