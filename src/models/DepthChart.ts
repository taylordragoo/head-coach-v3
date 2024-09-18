import { Model } from '@vuex-orm/core';
import Team from "@/models/Team";
import Player from "@/models/Player";

export default class DepthChart extends Model {
    static entity: string = 'depthChart';

    static fields() {
        return {
            id: this.attr(null),
            team_id: this.attr(0),
            player_id: this.attr(0),
            position: this.attr(''),
            rank: this.attr(0),

            // Relationships
            team: this.belongsTo(Team, 'team_id'),
            player: this.belongsTo(Player, 'player_id'),
        }
    }

    id!: number;
    team_id!: number;
    player_id!: number;
    position!: string;
    rank!: number;

    team!: Team;
    player!: Player;
}