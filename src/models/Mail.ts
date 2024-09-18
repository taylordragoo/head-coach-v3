import { Model } from '@vuex-orm/core'

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
}
