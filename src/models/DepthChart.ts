import { Model } from 'pinia-orm'
import Team from "@/models/Team";
import Player from "@/models/Player";

export default class DepthChart extends Model {
    static entity: string = 'depthChart';

    static fields() {
        return {
            id: this.uid(),
            team_id: this.attr(0),
            player_id: this.attr(0),
            position: this.attr(''),
            rank: this.attr(0),

            // Relationships
            // team: this.belongsTo(Team, 'team_id'),
            // player: this.belongsTo(Player, 'player_id'),
        }
    }

    static piniaOptions = {
        persist: true
    }

    declare id: number;
    declare team_id: number;
    declare player_id: number;
    declare position: string;
    declare rank: number;

    // declare team: Team | null;
    // declare player: Player | null;
}