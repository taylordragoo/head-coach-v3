import { Model } from 'pinia-orm'

export default class Coach extends Model {
    static entity = 'coach'

    static fields() {
        return {
            id: this.uid(),
            name: this.attr(''),
            position: this.attr(''),
            image: this.attr(''),
            bio: this.attr('')
        }
    }

    static piniaOptions = {
        persist: true
    }

    declare id: number
    declare name: string
    declare position: string
    declare image: string
    declare bio: string
}