import {Model} from "@vuex-orm/core";

export default class Activity extends Model {
    static entity: string = 'activity';

    static fields() {
        return {
            id: this.attr(null),
            name: this.string(''),
            description: this.string(''),
            affectedAttributes: this.attr([]),
        }
    }
}
