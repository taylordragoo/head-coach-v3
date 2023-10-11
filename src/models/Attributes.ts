import { Model } from '@vuex-orm/core'

export default class Attributes extends Model {
    static entity = 'attributes'
    static fields () {
        return {
            id: this.uid(),
            pid: this.attr(null),
            strength: this.number(null),
            speed: this.number(null),
            jump: this.number(null),
            stamina: this.number(null),
            throw_power: this.number(null),
            throw_acc: this.number(null),
            ball_sec: this.number(null),
            elusiveness: this.number(null),
            route_run: this.number(null),
            catching: this.number(null),
            run_block: this.number(null),
            pass_block: this.number(null),
            pass_cov: this.number(null),
            tackling: this.number(null),
            pass_rush: this.number(null),
            run_stop: this.number(null),
            kick_power: this.number(null),
            kick_acc: this.number(null),
            punt_power: this.number(null),
            punt_acc: this.number(null),
            overall: this.number(null),
            potential: this.number(null)
        }
    }
}
