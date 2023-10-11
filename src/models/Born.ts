import { Model } from '@vuex-orm/core'

export default class Born extends Model {
    static entity = 'born'
    static fields () {
        return {
            id: this.uid(),
            pid: this.attr(null),
            year: this.number(null),
            location: this.string('')
        }
    }
}
