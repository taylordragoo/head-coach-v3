import { Model } from 'pinia-orm'

export default class TrainingSchedule extends Model {
    static entity: string = 'trainingschedule';

    static fields() {
        return {
            id: this.uid(),
            playerId: this.attr(null),
            activityId: this.attr(null),
            session: this.string(''), // 'morning', 'afternoon', or 'evening'
            dayOfWeek: this.attr(''),
            improvement: this.attr(null),
        }
    }

    static piniaOptions = {
        persist: true
    }

    declare id: number
    declare playerId: number
    declare activityId: number
    declare session: string
    declare dayOfWeek: string
    declare improvement: number
}
