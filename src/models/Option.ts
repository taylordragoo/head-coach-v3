import { Model } from "@vuex-orm/core";
import Salary from "@/models/Salary";

export default class Option extends Model {
    static entity = "options";

    static fields() {
        return {
            id: this.attr(null),
            salary_id: this.attr(null),
            type: this.attr(""),
            salary: this.belongsTo(Salary, "salary_id")
        };
    }

    declare id: number | null;
    declare salary_id: number | null;
    declare type: string;
    declare salary: Salary | null;
}