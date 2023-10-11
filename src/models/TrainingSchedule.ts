import {Model} from "@vuex-orm/core";

export default class TrainingSchedule extends Model {
    static entity: string = 'trainingschedule';

    static fields() {
        return {
            id: this.attr(null),
            playerId: this.attr(null),
            activityId: this.attr(null),
            session: this.string(''), // 'morning', 'afternoon', or 'evening'
            dayOfWeek: this.attr(''),
            improvement: this.attr(null),
        }
    }
}
