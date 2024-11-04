import { Model } from 'pinia-orm'

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

    static piniaOptions = {
        persist: true
    }

    declare id: number
    declare pid: number
    declare strength: number
    declare speed: number
    declare jump: number
    declare stamina: number
    declare throw_power: number
    declare throw_acc: number
    declare ball_sec: number
    declare elusiveness: number
    declare route_run: number
    declare catching: number
    declare run_block: number
    declare pass_block: number
    declare pass_cov: number
    declare tackling: number
    declare pass_rush: number
    declare run_stop: number
    declare kick_power: number
    declare kick_acc: number
    declare punt_power: number
    declare punt_acc: number
    declare overall: number
    declare potential: number
}
