import { useRepo } from 'pinia-orm'
import Team from '@/models/Team';
import League from '@/models/League';
import Player from '@/models/Player';
import Staff from '@/models/Staff';
import Ratings from '@/models/Ratings';
import Overalls from '@/models/Overalls';
import Potentials from '@/models/Potentials';
import DepthChart from '@/models/DepthChart';
import Budget from '@/models/Budget';
import * as faker from 'faker';
import ITeam from '@/interfaces/ITeam';
import utils from '@/utils/utilities';
import PlayerService from '@/service/PlayerService';
import team_data from '@/data/teams.json';
import player_data from '@/data/newPlayers.json';
import { MIN_POSITION_COUNTS, MAX_POSITION_COUNTS, POSITIONS, POSITION_MAPPING, getModelRepo } from '@/data/constants';

export default class TeamService {
    private static instance: TeamService;
    public playerService: PlayerService;
    public modelRepo = getModelRepo();

    constructor() {
        this.playerService = PlayerService.getInstance();
    }

    public static getInstance(): TeamService {
        if (!TeamService.instance) {
            TeamService.instance = new TeamService();
        }

        return TeamService.instance;
    }

    async handleCreateNewTeams(teams: ITeam[])
    {
        const _teams = await Promise.all(teams.map(team => this.handleGenerateTeam(team)));

        let p: Player[] = player_data.players;
        const _players: Player[] = await Promise.all(p.map(player => {
            return this.playerService.handleGeneratePlayer(player);
        }));

        await this.modelRepo.teams.save(_teams)
        
        let all_teams = this.modelRepo.teams.with('players', (query) => {
            query.with('ratings');
        }).get();

        console.log(all_teams)
        
        // const playersRepo = useRepo(Player);
        // await playersRepo.save(_players);

        // for (let team of all_teams) {
        //     await this.handleSetInitialTeamDepthChart(team);
        // }
        
        return "Teams and Players created"
    }

    async handleGenerateTeam(data: any) {
        const staff = this.generateStaffForTeam(data.tid + 1);
        const staffArray = Object.values(staff);
        await this.modelRepo.staff.save(staffArray)

        this.generateBudgetForTeam(data.tid + 1, data);

        return {
            id: data.tid + 1,
            lid: 1,
            tid: data.tid + 1,
            cid: data.cid,
            did: data.did,
            name: data.name,
            region: data.region,
            abbreviation: data.abbrev,
            img_url: data.img_url,
            country: 'USA',
            strategy: data.strategy,
            population: data.pop,
            stadium_capacity: data.stadiumCapacity
        }
    }

    generateBudgetForTeam(teamId: number, data: any) {
        this.modelRepo.budget.save([
            {
                team_id: teamId,
                type: 'scouting',
                amount: data.budget.scouting.amount,
            },
            {
                team_id: teamId,
                type: 'coaching',
                amount: data.budget.coaching.amount,
            },
            {
                team_id: teamId,
                type: 'health',
                amount: data.budget.health.amount,
            },
            {
                team_id: teamId,
                type: 'facilities',
                amount: data.budget.facilities.amount,
            }
        ])
    }

    getPosition(currentPositionCounts: any) {
        // Get positions that haven't reached their minimum count
        let underMinPositions = POSITIONS.filter(position => currentPositionCounts[position] < MIN_POSITION_COUNTS[position]);

        // If all positions have reached their minimum count, get positions that haven't reached their maximum count
        if (underMinPositions.length === 0) {
            underMinPositions = POSITIONS.filter(position => currentPositionCounts[position] < MAX_POSITION_COUNTS[position]);
        }

        // If all positions have reached their maximum count, throw an error
        if (underMinPositions.length === 0) {
            throw new Error("All positions have reached their maximum count!");
        }

        // Select a random position from the underMinPositions array
        const selectedPosition = underMinPositions[Math.floor(Math.random() * underMinPositions.length)];

        return selectedPosition;
    }

    generateStaffForTeam(teamId: number) {
        return {
            head_coach: this.generateStaffMember(teamId, 'Head Coach'),
            offensive_coordinator: this.generateStaffMember(teamId, 'Offensive Coordinator'),
            defensive_coordinator: this.generateStaffMember(teamId, 'Defensive Coordinator'),
            qb_coach: this.generateStaffMember(teamId, 'QB Coach'),
            rb_coach: this.generateStaffMember(teamId, 'RB Coach'),
            te_coach: this.generateStaffMember(teamId, 'TE Coach'),
            wr_coach: this.generateStaffMember(teamId, 'WR Coach'),
            oline_coach: this.generateStaffMember(teamId, 'OLine Coach'),
            dline_coach: this.generateStaffMember(teamId, 'DLine Coach'),
            linebacker_coach: this.generateStaffMember(teamId, 'Linebacker Coach'),
            secondary_coach: this.generateStaffMember(teamId, 'Secondary Coach'),
            special_teams_coach: this.generateStaffMember(teamId, 'Special Teams Coach'),
            strength_coach: this.generateStaffMember(teamId, 'Strength Coach'),
            coach: this.generateStaffMember(teamId, 'Coach'),
            owner: this.generateStaffMember(teamId, 'Owner'),
            president: this.generateStaffMember(teamId, 'President'),
            chief_executive_officer: this.generateStaffMember(teamId, 'Chief Executive Officer'),
            general_manager: this.generateStaffMember(teamId, 'General Manager'),
            director_pro_scouting: this.generateStaffMember(teamId, 'Director of Pro Scouting'),
            director_college_scouting: this.generateStaffMember(teamId, 'Director of College Scouting'),
            scout: this.generateStaffMember(teamId, 'Scout'),
            sports_medicine_director: this.generateStaffMember(teamId, 'Sports Medicine Director'),
            doctor: this.generateStaffMember(teamId, 'Doctor'),
            trainer: this.generateStaffMember(teamId, 'Trainer'),
        }
    }
    
    generateStaffMember(teamId: number, role: string) {
        const baseSkills = {
            team_id: teamId,
            first_name: faker.name.firstName(),
            last_name: faker.name.lastName(),
            role: role,
            contract: {
                amount: faker.datatype.number({min: 100000, max: 1000000}),
                expires: faker.datatype.number({ min: 2025, max: 2030 })
            },
            leadership: faker.datatype.number({min: 10, max: 20}),
            adaptability: faker.datatype.number({min: 10, max: 20}),
            ambition: faker.datatype.number({min: 10, max: 20}),
            discipline: faker.datatype.number({min: 10, max: 20}),
            motivation: faker.datatype.number({min: 10, max: 20}),
            contract_negotiations: faker.datatype.number({min: 10, max: 20}),
            rookie_player_management: faker.datatype.number({min: 1, max: 5}),
            veteran_player_management: faker.datatype.number({min: 1, max: 5}),
            player_ability_analysis: faker.datatype.number({min: 1, max: 5}),
            player_potential_analysis: faker.datatype.number({min: 1, max: 5}),
            staff_ability_analysis: faker.datatype.number({min: 1, max: 5}),
            data_analysis: faker.datatype.number({min: 1, max: 5}),
            offensive_technical: faker.datatype.number({min: 1, max: 5}),
            defensive_technical: faker.datatype.number({min: 1, max: 5}),
            play_calling_ability: faker.datatype.number({min: 1, max: 5}),
            gameplan: faker.datatype.number({min: 1, max: 5}),
            throwing_technical: faker.datatype.number({min: 1, max: 5}),
            hands_technical: faker.datatype.number({min: 1, max: 5}),
            routes_technical: faker.datatype.number({min: 1, max: 5}),
            blocking_technical: faker.datatype.number({min: 1, max: 5}),
            tackling_technical: faker.datatype.number({min: 1, max: 5}),
            coverage_technical: faker.datatype.number({min: 1, max: 5}),
            kicking_technical: faker.datatype.number({min: 1, max: 5}),
            punting_technical: faker.datatype.number({min: 1, max: 5}),
            athletic_training: faker.datatype.number({min: 1, max: 5}),
            medical_training: faker.datatype.number({min: 1, max: 5}),
        }
    
        let roleSpecificSkills = {};

        switch(role) {
            case 'Head Coach':
                roleSpecificSkills = {
                    // Player Management
                    rookie_player_management: faker.datatype.number({min: 10, max: 20}),
                    veteran_player_management: faker.datatype.number({min: 10, max: 20}),
                    
                    // Scouting
                    player_ability_analysis: faker.datatype.number({min: 10, max: 20}),
                    player_potential_analysis: faker.datatype.number({min: 10, max: 20}),
                    staff_ability_analysis: faker.datatype.number({min: 10, max: 20}),
                    data_analysis: faker.datatype.number({min: 10, max: 20}),
                    
                    // Coaching
                    gameplan: faker.datatype.number({min: 10, max: 20}),
                    play_calling_ability: faker.datatype.number({min: 10, max: 20}),
                    offensive_technical: faker.datatype.number({min: 10, max: 20}),
                    defensive_technical: faker.datatype.number({min: 10, max: 20}),
                    throwing_technical: faker.datatype.number({min: 10, max: 20}),
                    hands_technical: faker.datatype.number({min: 10, max: 20}),
                    routes_technical: faker.datatype.number({min: 10, max: 20}),
                    blocking_technical: faker.datatype.number({min: 10, max: 20}),
                    tackling_technical: faker.datatype.number({min: 10, max: 20}),
                    coverage_technical: faker.datatype.number({min: 10, max: 20}),
                    kicking_technical: faker.datatype.number({min: 10, max: 20}),
                    punting_technical: faker.datatype.number({min: 10, max: 20}),
                }
                break;
            case 'Offensive Coordinator':
                roleSpecificSkills = {
                    // Player Management
                    rookie_player_management: faker.datatype.number({min: 10, max: 20}),
                    veteran_player_management: faker.datatype.number({min: 10, max: 20}),
                    
                    // Scouting
                    player_ability_analysis: faker.datatype.number({min: 10, max: 20}),
                    player_potential_analysis: faker.datatype.number({min: 10, max: 20}),
                    staff_ability_analysis: faker.datatype.number({min: 10, max: 20}),
                    data_analysis: faker.datatype.number({min: 10, max: 20}),
                    
                    // Coaching
                    gameplan: faker.datatype.number({min: 10, max: 20}),
                    play_calling_ability: faker.datatype.number({min: 10, max: 20}),
                    offensive_technical: faker.datatype.number({min: 10, max: 20}),
                    defensive_technical: faker.datatype.number({min: 10, max: 20}),
                    throwing_technical: faker.datatype.number({min: 10, max: 20}),
                    hands_technical: faker.datatype.number({min: 10, max: 20}),
                    routes_technical: faker.datatype.number({min: 10, max: 20}),
                    blocking_technical: faker.datatype.number({min: 10, max: 20}),
                    tackling_technical: faker.datatype.number({min: 10, max: 20}),
                    coverage_technical: faker.datatype.number({min: 10, max: 20}),
                    kicking_technical: faker.datatype.number({min: 10, max: 20}),
                    punting_technical: faker.datatype.number({min: 10, max: 20}),
                }
                break;
            case 'Defensive Coordinator':
                roleSpecificSkills = {
                    // Player Management
                    rookie_player_management: faker.datatype.number({min: 10, max: 20}),
                    veteran_player_management: faker.datatype.number({min: 10, max: 20}),
                    
                    // Scouting
                    player_ability_analysis: faker.datatype.number({min: 10, max: 20}),
                    player_potential_analysis: faker.datatype.number({min: 10, max: 20}),
                    staff_ability_analysis: faker.datatype.number({min: 10, max: 20}),
                    data_analysis: faker.datatype.number({min: 10, max: 20}),
                    
                    // Coaching
                    gameplan: faker.datatype.number({min: 10, max: 20}),
                    play_calling_ability: faker.datatype.number({min: 10, max: 20}),
                    offensive_technical: faker.datatype.number({min: 10, max: 20}),
                    defensive_technical: faker.datatype.number({min: 10, max: 20}),
                    throwing_technical: faker.datatype.number({min: 10, max: 20}),
                    hands_technical: faker.datatype.number({min: 10, max: 20}),
                    routes_technical: faker.datatype.number({min: 10, max: 20}),
                    blocking_technical: faker.datatype.number({min: 10, max: 20}),
                    tackling_technical: faker.datatype.number({min: 10, max: 20}),
                    coverage_technical: faker.datatype.number({min: 10, max: 20}),
                    kicking_technical: faker.datatype.number({min: 10, max: 20}),
                    punting_technical: faker.datatype.number({min: 10, max: 20}),
                }
                break;
            case 'QB Coach':
                roleSpecificSkills = {
                    // Player Management
                    rookie_player_management: faker.datatype.number({min: 10, max: 20}),
                    veteran_player_management: faker.datatype.number({min: 10, max: 20}),
                    
                    // Scouting
                    player_ability_analysis: faker.datatype.number({min: 10, max: 20}),
                    player_potential_analysis: faker.datatype.number({min: 10, max: 20}),
                    staff_ability_analysis: faker.datatype.number({min: 10, max: 20}),
                    data_analysis: faker.datatype.number({min: 10, max: 20}),
                    
                    // Coaching
                    gameplan: faker.datatype.number({min: 10, max: 20}),
                    play_calling_ability: faker.datatype.number({min: 10, max: 18}),
                    offensive_technical: faker.datatype.number({min: 10, max: 18}),
                    defensive_technical: faker.datatype.number({min: 10, max: 18}),
                    throwing_technical: faker.datatype.number({min: 14, max: 18}),
                    hands_technical: faker.datatype.number({min: 10, max: 15}),
                    routes_technical: faker.datatype.number({min: 10, max: 15}),
                    blocking_technical: faker.datatype.number({min: 10, max: 15})
                }
                break;
            
            case 'RB Coach':
                roleSpecificSkills = {
                    // Player Management
                    rookie_player_management: faker.datatype.number({min: 10, max: 20}),
                    veteran_player_management: faker.datatype.number({min: 10, max: 20}),
                    
                    // Scouting
                    player_ability_analysis: faker.datatype.number({min: 10, max: 20}),
                    player_potential_analysis: faker.datatype.number({min: 10, max: 20}),
                    staff_ability_analysis: faker.datatype.number({min: 10, max: 20}),
                    data_analysis: faker.datatype.number({min: 10, max: 20}),
                    
                    // Coaching
                    gameplan: faker.datatype.number({min: 10, max: 20}),
                    play_calling_ability: faker.datatype.number({min: 10, max: 18}),
                    offensive_technical: faker.datatype.number({min: 10, max: 18}),
                    defensive_technical: faker.datatype.number({min: 10, max: 18}),
                    throwing_technical: faker.datatype.number({min: 14, max: 18}),
                    hands_technical: faker.datatype.number({min: 10, max: 15}),
                    routes_technical: faker.datatype.number({min: 10, max: 15}),
                    blocking_technical: faker.datatype.number({min: 10, max: 15})
                }
                break;
            case 'TE Coach':
                roleSpecificSkills = {
                    // Player Management
                    rookie_player_management: faker.datatype.number({min: 10, max: 20}),
                    veteran_player_management: faker.datatype.number({min: 10, max: 20}),
                    
                    // Scouting
                    player_ability_analysis: faker.datatype.number({min: 10, max: 20}),
                    player_potential_analysis: faker.datatype.number({min: 10, max: 20}),
                    staff_ability_analysis: faker.datatype.number({min: 10, max: 20}),
                    data_analysis: faker.datatype.number({min: 10, max: 20}),
                    
                    // Coaching
                    gameplan: faker.datatype.number({min: 10, max: 20}),
                    play_calling_ability: faker.datatype.number({min: 10, max: 18}),
                    offensive_technical: faker.datatype.number({min: 10, max: 18}),
                    defensive_technical: faker.datatype.number({min: 10, max: 18}),
                    throwing_technical: faker.datatype.number({min: 14, max: 18}),
                    hands_technical: faker.datatype.number({min: 10, max: 15}),
                    routes_technical: faker.datatype.number({min: 10, max: 15}),
                    blocking_technical: faker.datatype.number({min: 10, max: 15})
                }
                break;
            case 'WR Coach':
                roleSpecificSkills = {
                    // Player Management
                    rookie_player_management: faker.datatype.number({min: 10, max: 20}),
                    veteran_player_management: faker.datatype.number({min: 10, max: 20}),
                    
                    // Scouting
                    player_ability_analysis: faker.datatype.number({min: 10, max: 20}),
                    player_potential_analysis: faker.datatype.number({min: 10, max: 20}),
                    staff_ability_analysis: faker.datatype.number({min: 10, max: 20}),
                    data_analysis: faker.datatype.number({min: 10, max: 20}),
                    
                    // Coaching
                    gameplan: faker.datatype.number({min: 10, max: 20}),
                    play_calling_ability: faker.datatype.number({min: 10, max: 18}),
                    offensive_technical: faker.datatype.number({min: 10, max: 18}),
                    defensive_technical: faker.datatype.number({min: 10, max: 18}),
                    throwing_technical: faker.datatype.number({min: 14, max: 18}),
                    hands_technical: faker.datatype.number({min: 10, max: 15}),
                    routes_technical: faker.datatype.number({min: 10, max: 15}),
                    blocking_technical: faker.datatype.number({min: 10, max: 15})
                }
                break;
            case 'Linebacker Coach':
                roleSpecificSkills = {
                    // Player Management
                    rookie_player_management: faker.datatype.number({min: 10, max: 20}),
                    veteran_player_management: faker.datatype.number({min: 10, max: 20}),
                    
                    // Scouting
                    player_ability_analysis: faker.datatype.number({min: 10, max: 20}),
                    player_potential_analysis: faker.datatype.number({min: 10, max: 20}),
                    staff_ability_analysis: faker.datatype.number({min: 10, max: 20}),
                    data_analysis: faker.datatype.number({min: 10, max: 20}),
                    
                    // Coaching
                    gameplan: faker.datatype.number({min: 10, max: 20}),
                    play_calling_ability: faker.datatype.number({min: 10, max: 18}),
                    offensive_technical: faker.datatype.number({min: 10, max: 18}),
                    defensive_technical: faker.datatype.number({min: 10, max: 18}),
                    throwing_technical: faker.datatype.number({min: 14, max: 18}),
                    hands_technical: faker.datatype.number({min: 10, max: 15}),
                    routes_technical: faker.datatype.number({min: 10, max: 15}),
                    blocking_technical: faker.datatype.number({min: 10, max: 15})
                }
                break;
            case 'DLine Coach':
                roleSpecificSkills = {
                    // Player Management
                    rookie_player_management: faker.datatype.number({min: 10, max: 20}),
                    veteran_player_management: faker.datatype.number({min: 10, max: 20}),
                    
                    // Scouting
                    player_ability_analysis: faker.datatype.number({min: 10, max: 20}),
                    player_potential_analysis: faker.datatype.number({min: 10, max: 20}),
                    staff_ability_analysis: faker.datatype.number({min: 10, max: 20}),
                    data_analysis: faker.datatype.number({min: 10, max: 20}),
                    
                    // Coaching
                    gameplan: faker.datatype.number({min: 10, max: 20}),
                    play_calling_ability: faker.datatype.number({min: 10, max: 18}),
                    offensive_technical: faker.datatype.number({min: 10, max: 18}),
                    defensive_technical: faker.datatype.number({min: 10, max: 18}),
                    throwing_technical: faker.datatype.number({min: 14, max: 18}),
                    hands_technical: faker.datatype.number({min: 10, max: 15}),
                    routes_technical: faker.datatype.number({min: 10, max: 15}),
                    blocking_technical: faker.datatype.number({min: 10, max: 15})
                }
                break;
            case 'OLine Coach':
                roleSpecificSkills = {
                    // Player Management
                    rookie_player_management: faker.datatype.number({min: 10, max: 20}),
                    veteran_player_management: faker.datatype.number({min: 10, max: 20}),
                    
                    // Scouting
                    player_ability_analysis: faker.datatype.number({min: 10, max: 20}),
                    player_potential_analysis: faker.datatype.number({min: 10, max: 20}),
                    staff_ability_analysis: faker.datatype.number({min: 10, max: 20}),
                    data_analysis: faker.datatype.number({min: 10, max: 20}),
                    
                    // Coaching
                    gameplan: faker.datatype.number({min: 10, max: 20}),
                    play_calling_ability: faker.datatype.number({min: 10, max: 18}),
                    offensive_technical: faker.datatype.number({min: 10, max: 18}),
                    defensive_technical: faker.datatype.number({min: 10, max: 18}),
                    throwing_technical: faker.datatype.number({min: 14, max: 18}),
                    hands_technical: faker.datatype.number({min: 10, max: 15}),
                    routes_technical: faker.datatype.number({min: 10, max: 15}),
                    blocking_technical: faker.datatype.number({min: 10, max: 15})
                }
                break;
            case 'Special Teams Coach':
                roleSpecificSkills = {
                    // Player Management
                    rookie_player_management: faker.datatype.number({min: 10, max: 20}),
                    veteran_player_management: faker.datatype.number({min: 10, max: 20}),
                    
                    // Scouting
                    player_ability_analysis: faker.datatype.number({min: 10, max: 20}),
                    player_potential_analysis: faker.datatype.number({min: 10, max: 20}),
                    staff_ability_analysis: faker.datatype.number({min: 10, max: 20}),
                    data_analysis: faker.datatype.number({min: 10, max: 20}),
                    
                    // Coaching
                    gameplan: faker.datatype.number({min: 10, max: 20}),
                    play_calling_ability: faker.datatype.number({min: 10, max: 18}),
                    offensive_technical: faker.datatype.number({min: 10, max: 18}),
                    defensive_technical: faker.datatype.number({min: 10, max: 18}),
                    throwing_technical: faker.datatype.number({min: 14, max: 18}),
                    hands_technical: faker.datatype.number({min: 10, max: 15}),
                    routes_technical: faker.datatype.number({min: 10, max: 15}),
                    blocking_technical: faker.datatype.number({min: 10, max: 15})
                }
                break;
            case 'Secondary Coach':
                roleSpecificSkills = {
                    // Player Management
                    rookie_player_management: faker.datatype.number({min: 10, max: 20}),
                    veteran_player_management: faker.datatype.number({min: 10, max: 20}),
                    
                    // Scouting
                    player_ability_analysis: faker.datatype.number({min: 10, max: 20}),
                    player_potential_analysis: faker.datatype.number({min: 10, max: 20}),
                    staff_ability_analysis: faker.datatype.number({min: 10, max: 20}),
                    data_analysis: faker.datatype.number({min: 10, max: 20}),
                    
                    // Coaching
                    gameplan: faker.datatype.number({min: 10, max: 20}),
                    play_calling_ability: faker.datatype.number({min: 10, max: 18}),
                    offensive_technical: faker.datatype.number({min: 10, max: 18}),
                    defensive_technical: faker.datatype.number({min: 10, max: 18}),
                    throwing_technical: faker.datatype.number({min: 14, max: 18}),
                    hands_technical: faker.datatype.number({min: 10, max: 15}),
                    routes_technical: faker.datatype.number({min: 10, max: 15}),
                    blocking_technical: faker.datatype.number({min: 10, max: 15})
                }
                break;
            case 'Strength Coach':
                roleSpecificSkills = {
                    // Player Management
                    rookie_player_management: faker.datatype.number({min: 10, max: 20}),
                    veteran_player_management: faker.datatype.number({min: 10, max: 20}),
                    
                    // Scouting
                    player_ability_analysis: faker.datatype.number({min: 10, max: 20}),
                    player_potential_analysis: faker.datatype.number({min: 10, max: 20}),
                    staff_ability_analysis: faker.datatype.number({min: 10, max: 20}),
                    data_analysis: faker.datatype.number({min: 10, max: 20}),
                    
                    // Coaching
                    gameplan: faker.datatype.number({min: 10, max: 20}),
                    play_calling_ability: faker.datatype.number({min: 10, max: 18}),
                    offensive_technical: faker.datatype.number({min: 10, max: 18}),
                    defensive_technical: faker.datatype.number({min: 10, max: 18}),
                    throwing_technical: faker.datatype.number({min: 14, max: 18}),
                    hands_technical: faker.datatype.number({min: 10, max: 15}),
                    routes_technical: faker.datatype.number({min: 10, max: 15}),
                    blocking_technical: faker.datatype.number({min: 10, max: 15})
                }
                break;
            case 'Coach':
                roleSpecificSkills = {
                    // Player Management
                    rookie_player_management: faker.datatype.number({min: 10, max: 20}),
                    veteran_player_management: faker.datatype.number({min: 10, max: 20}),
                    
                    // Scouting
                    player_ability_analysis: faker.datatype.number({min: 10, max: 20}),
                    player_potential_analysis: faker.datatype.number({min: 10, max: 20}),
                    staff_ability_analysis: faker.datatype.number({min: 10, max: 20}),
                    data_analysis: faker.datatype.number({min: 10, max: 20}),
                    
                    // Coaching
                    gameplan: faker.datatype.number({min: 10, max: 20}),
                    play_calling_ability: faker.datatype.number({min: 10, max: 18}),
                    offensive_technical: faker.datatype.number({min: 10, max: 18}),
                    defensive_technical: faker.datatype.number({min: 10, max: 18}),
                    throwing_technical: faker.datatype.number({min: 14, max: 18}),
                    hands_technical: faker.datatype.number({min: 10, max: 15}),
                    routes_technical: faker.datatype.number({min: 10, max: 15}),
                    blocking_technical: faker.datatype.number({min: 10, max: 15})
                }
                break;
            case 'Owner':
                roleSpecificSkills = {
                    leadership: faker.datatype.number({min: 10, max: 20}),
                    adaptability: faker.datatype.number({min: 10, max: 20}),
                    ambition: faker.datatype.number({min: 10, max: 20}),
                    discipline: faker.datatype.number({min: 10, max: 20}),
                    motivation: faker.datatype.number({min: 10, max: 20}),
                }
                break;
            case 'Chief Executive Officer':
                    roleSpecificSkills = {
                        leadership: faker.datatype.number({min: 10, max: 20}),
                        adaptability: faker.datatype.number({min: 10, max: 20}),
                        ambition: faker.datatype.number({min: 10, max: 20}),
                        discipline: faker.datatype.number({min: 10, max: 20}),
                        motivation: faker.datatype.number({min: 10, max: 20}),
                    }
                    break;
            case 'President':
                roleSpecificSkills = {
                    leadership: faker.datatype.number({min: 10, max: 20}),
                    adaptability: faker.datatype.number({min: 10, max: 20}),
                    ambition: faker.datatype.number({min: 10, max: 20}),
                    discipline: faker.datatype.number({min: 10, max: 20}),
                    motivation: faker.datatype.number({min: 10, max: 20}),
                }
                break;
            case 'General Manager':
                roleSpecificSkills = {
                    leadership: faker.datatype.number({min: 10, max: 20}),
                    adaptability: faker.datatype.number({min: 10, max: 20}),
                    ambition: faker.datatype.number({min: 10, max: 20}),
                    discipline: faker.datatype.number({min: 10, max: 20}),
                    motivation: faker.datatype.number({min: 10, max: 20}),
                    contract_negotiations: faker.datatype.number({min: 10, max: 20}),

                    // Scouting
                    player_ability_analysis: faker.datatype.number({min: 10, max: 20}),
                    player_potential_analysis: faker.datatype.number({min: 10, max: 20}),
                    staff_ability_analysis: faker.datatype.number({min: 10, max: 20}),
                    data_analysis: faker.datatype.number({min: 10, max: 20}),
                }
                break;
            case 'Director of Pro Scouting':
                roleSpecificSkills = {
                    leadership: faker.datatype.number({min: 10, max: 20}),
                    adaptability: faker.datatype.number({min: 10, max: 20}),
                    ambition: faker.datatype.number({min: 10, max: 20}),
                    discipline: faker.datatype.number({min: 10, max: 20}),
                    motivation: faker.datatype.number({min: 10, max: 20}),
                    contract_negotiations: faker.datatype.number({min: 10, max: 20}),

                    // Scouting
                    player_ability_analysis: faker.datatype.number({min: 10, max: 20}),
                    player_potential_analysis: faker.datatype.number({min: 10, max: 20}),
                    staff_ability_analysis: faker.datatype.number({min: 10, max: 20}),
                    data_analysis: faker.datatype.number({min: 10, max: 20}),
                }
                break;
            case 'Director of College Scouting':
                roleSpecificSkills = {
                    leadership: faker.datatype.number({min: 10, max: 20}),
                    adaptability: faker.datatype.number({min: 10, max: 20}),
                    ambition: faker.datatype.number({min: 10, max: 20}),
                    discipline: faker.datatype.number({min: 10, max: 20}),
                    motivation: faker.datatype.number({min: 10, max: 20}),
                    contract_negotiations: faker.datatype.number({min: 10, max: 20}),

                    // Scouting
                    player_ability_analysis: faker.datatype.number({min: 10, max: 20}),
                    player_potential_analysis: faker.datatype.number({min: 10, max: 20}),
                    staff_ability_analysis: faker.datatype.number({min: 10, max: 20}),
                    data_analysis: faker.datatype.number({min: 10, max: 20}),
                }
                break;
            case 'Scout':
                roleSpecificSkills = {
                    leadership: faker.datatype.number({min: 10, max: 20}),
                    adaptability: faker.datatype.number({min: 10, max: 20}),
                    ambition: faker.datatype.number({min: 10, max: 20}),
                    discipline: faker.datatype.number({min: 10, max: 20}),
                    motivation: faker.datatype.number({min: 10, max: 20}),
                    contract_negotiations: faker.datatype.number({min: 10, max: 20}),

                    // Scouting
                    player_ability_analysis: faker.datatype.number({min: 10, max: 20}),
                    player_potential_analysis: faker.datatype.number({min: 10, max: 20}),
                    staff_ability_analysis: faker.datatype.number({min: 10, max: 20}),
                    data_analysis: faker.datatype.number({min: 10, max: 20}),
                }
                break;
            case 'Sports Medicine Director':
                roleSpecificSkills = {
                    athletic_training: faker.datatype.number({min: 10, max: 20}),
                    medical_training: faker.datatype.number({min: 10, max: 20}),
                }
                break;
            case 'Doctor':
                roleSpecificSkills = {
                    athletic_training: faker.datatype.number({min: 10, max: 20}),
                    medical_training: faker.datatype.number({min: 10, max: 20}),
                }
                break;
            case 'Trainer':
                roleSpecificSkills = {
                    athletic_training: faker.datatype.number({min: 10, max: 20}),
                     medical_training: faker.datatype.number({min: 10, max: 20}),
                }
                break;
            default:
                break;
        }
    
        return {...baseSkills, ...roleSpecificSkills};
    }

    handleGetDefaultTeams() {
        const teamRepo = useRepo(Team);
        const teams: Team[] = teamRepo.all().map(team => {
            return team;
        });

        return teams;
    }

    public async evaluateTeamPerformance(teamId: number): Promise<number> {
        const teamsRepo = useRepo(Team);
        const team = teamsRepo.query().with('players', query => query.with('ratings')).where('id', teamId).first();

        if (!team) {
            throw new Error(`Team with id ${teamId} not found`);
        }

        let totalPlayerRating = 0;

        team.players?.forEach((player: Player) => {
            totalPlayerRating += player.ratings.overall_rating;
        });

        const averagePlayerRating = totalPlayerRating / (team.players?.length ?? 0);
        
        return averagePlayerRating;
    }

    async handleSetInitialTeamDepthChart(team: ITeam) {
        let depthChart: any[] = [];

        // Sort players by position
        let sortedPlayers = team.players.sort((a, b) => {
            // If players have the same position, sort by overall rating
            if (a.ratings.position === b.ratings.position) {
                return b.ratings.overall_rating - a.ratings.overall_rating;
            }
            // Otherwise, sort by position
            return a.ratings.position.localeCompare(b.ratings.position);
        });

        // Create a map to store the top 5 players for each position
        let positionMap = new Map();

        // Populate the position map with the top 5 players for each position
        for (let player of sortedPlayers) {
            let playerPositions = POSITION_MAPPING[player.ratings.position];
            playerPositions.forEach(position => {
                if (!positionMap.has(position)) {
                    positionMap.set(position, []);
                }
                let positionPlayers = positionMap.get(position);
                if (positionPlayers.length < 5) {
                    positionPlayers.push(player);
                }
            });
        }

        // Create depth chart from the position map
        positionMap.forEach((players, position) => {
            players.forEach((player, index) => {
                depthChart.push({
                    team_id: team.id,
                    player_id: player.id,
                    position: position,
                    rank: index + 1
                });
            });
        });

        const depth_chart = useRepo(DepthChart);
        // Save depth chart to the database
        await depth_chart.save([...depthChart]);
    }

    async handleUpdateTeamDepthChart(arr: DepthChart[]) {
        console.log(arr);
        const depth_chart = useRepo(DepthChart);
        await depth_chart.update(arr);
    }

    debugGeneratedPlayers(teams: Team[]) {
        let allPlayers = teams.flatMap(team => team.players);
        let qbs: Player[] = allPlayers.filter(p => p.ratings.position === 'QB');
        qbs = qbs.sort((a, b) => b.ratings.throw_power - a.ratings.throw_power);

        let qb_ratings: Ratings[] = qbs.map(player => ({
            overall: Math.round(40 + (
                (
                    (player.ratings.throw_power * 0.3) + 
                    (player.ratings.throw_accuracy_deep * 0.3) + 
                    (player.ratings.throw_accuracy_mid * 0.25) + 
                    (player.ratings.throw_accuracy_short * 0.2)
                ) / 300) * 60
            ),
            throw_power: Math.round(40 + ((player.ratings.throw_power / 300) * 60)),
            throw_accuracy_deep: Math.round(40 + ((player.ratings.throw_accuracy_deep / 300) * 60)),
            throw_accuracy_mid: Math.round(40 + ((player.ratings.throw_accuracy_mid / 300) * 60)),
            throw_accuracy_short: Math.round(40 + ((player.ratings.throw_accuracy_short / 300) * 60))
        }));

        qb_ratings = qb_ratings.sort((a, b) => b.overall - a.overall);

        console.log(qb_ratings);

        teams.forEach((team, index) => {
            let positionCounts = {};
            let totalPlayers = 0; // Initialize total players count
            for (let position of POSITIONS) {
                positionCounts[position] = { count: 0, players: [] };
            }
        
            team.players.forEach(player => {
                positionCounts[player.ratings.position].count++;
                positionCounts[player.ratings.position].players.push(player);
                totalPlayers++; // Increment total players count
            });
        
            console.log(`Team ${index + 1} position counts:`, positionCounts);
            console.log(`Team ${index + 1} total players:`, totalPlayers); // Log total players count
        });
    }
}
