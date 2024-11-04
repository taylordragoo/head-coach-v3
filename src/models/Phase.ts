import { Model } from 'pinia-orm'

export default class Phase extends Model {
    static entity = 'phase'
    static fields () {
        return {
            id: this.uid(),
            startWeek: this.number(1),
            endWeek: this.number(2),
        }
    }

    static piniaOptions = {
        persist: true
    }

    declare id: number
    declare startWeek: number
    declare endWeek: number
}
