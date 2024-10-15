import IOveralls from './IOveralls';
import IPotentials from './IPotentials';
import ISkill from './ISkill';

export default interface IRating {
	[key: string]: number | string;
	position: string
	position_archetype: string
	mental_archetype: string
	overall: number
	potential: number
	fuzz: number
	// Mental
	aggression: number
	anticipation: number
	bravery: number
	composure: number
	concentration: number
	decisions: number
	determination: number
	flair: number
	leadership: number
	off_the_ball: number
	positioning: number
	teamwork: number
	vision: number
	work_rate: number
	// Physical
	acceleration: number
	agility: number
	speed: number
	stamina: number
	strength: number
	vertical: number
	// Throwing
	throw_accuracy_deep: number
	throw_accuracy_mid: number
	throw_accuracy_short: number
	throw_on_the_run: number
	throw_power: number
	play_action: number
	// Running
	route_running: number
	// Hands
	carrying: number
	catching: number
	// Blocking
	pass_blocking: number
	run_blocking: number
	// Defensive
	shed_block: number
	tackle: number
	zone_coverage: number
	man_coverage: number
	// Kicking
	kick_accuracy: number
	kick_power: number
	punt_accuracy: number
	punt_power: number
}