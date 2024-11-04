import { Model } from 'pinia-orm'
import { POSITION_ARCHETYPES_DISPLAY_NAMES, MENTAL_ARCHETYPES_DISPLAY_NAMES } from '@/data/constants';
import Overalls from '@/models/Overalls';
import Potentials from '@/models/Potentials';

export default class Mental extends Model {
	static entity: string = 'mental'

    static fields () {
        return {
            id: this.uid(),
            pid: this.attr(null),
            aggression: this.number(0),
            anticipation: this.number(0),
            bravery: this.number(0),
            composure: this.number(0),
            concentration: this.number(0),
            decisions: this.number(0),
            determination: this.number(0),
            flair: this.number(0),
            leadership: this.number(0),
            off_the_ball: this.number(0),
            positioning: this.number(0),
            teamwork: this.number(0),
            vision: this.number(0),
            work_rate: this.number(0),
        }
    }

    static piniaOptions = {
        persist: true
    }

    // Mental
	declare aggression: number
	declare anticipation: number
	declare bravery: number
	declare composure: number
	declare concentration: number
	declare decisions: number
	declare determination: number
	declare flair: number
	declare leadership: number
	declare off_the_ball: number
	declare positioning: number
	declare teamwork: number
	declare vision: number
	declare work_rate: number
}