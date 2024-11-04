import { Model } from 'pinia-orm'

export default class Activity extends Model {
    static entity: string = 'activity';

    static fields() {
        return {
            id: this.uid(),
            name: this.string(''),
            description: this.string(''),
            affectedAttributes: this.attr([]),
        }
    }

    static piniaOptions = {
        persist: true
    }

    declare id: number;
    declare name: string;
    declare description: string;
    declare affectedAttributes: string[];
}
