import { Model } from 'pinia-orm'

export default class Mail extends Model {
    static entity = 'mail'
    static fields () {
        return {
            id: this.uid(),
            user_id: this.attr(''),
            from: this.string(''),
            to: this.string(''),
            subject: this.string(''),
            body: this.string(''),
        }
    }

    static piniaOptions = {
        persist: true
    }

    declare id: number
    declare user_id: string
    declare from: string
    declare to: string
    declare subject: string
    declare body: string
}
