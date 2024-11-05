import { Model } from '@vuex-orm/core'

export default class Coach extends Model {
    static entity = 'coach'

static fields() {
        return {
            id: this.attr(null),
            name: this.attr(''),
            position: this.attr(''),
            image: this.attr(''),
            bio: this.attr('')
        }
    }

    declare id: number
    declare name: string
    declare position: string
    declare image: string
    declare bio: string
}