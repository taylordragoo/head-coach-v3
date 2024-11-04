import {
    CareerController,
    DatabaseController
}  from '@/controllers/index';
import League from "../models/League";
import Team from "../models/Team";
import Player from "../models/Player";
const careerController = CareerController.getInstance()
const databaseController = DatabaseController.getInstance()

export const handleGetDefaultTeamsAndLeagues = async () => {
    const data = await databaseController.initDefaultDatabase();
    console.log(data);
    const leagues = data.leagues;
    const teams = data.teams;
    const players = data.players
    const treeTableValue = handleAssignTeamsToLeagues(leagues, teams, players)
    const db = await handleGetDatabases()
    return {
        leagues: leagues,
        teams: teams,
        players: players,
        treeTableValue: treeTableValue, 
        names: db.names,
        databases: db.databases
    };
}

export const handleAssignTeamsToLeagues = (leagues: League[], teams: Team[], players: Player[]) => {
    let leagueTree = [];
    for (let league of leagues) {
        let leagueTeams = teams.filter(team => team.lid === league.id);
        for (let team of leagueTeams) {
            league.teams?.push(team);
            let teamPlayers = players.filter(player => player.team_id === team.id);
            for (let player of teamPlayers) {
                team.players?.push(player);
            }
        }
    }

    for (let league of leagues) {
        let leagueTeams = teams.filter(team => team.lid === league.id);
        let children = leagueTeams.map(team => {
            let teamPlayers = players.filter(player => player.team_id === team.id);
            let playerChildren = teamPlayers.map(player => ({
                key: `${team.lid}-${team.id}-${player.id}`,
                data: player,
            }));
            return {
                key: `${team.lid}-${team.id}`,
                data: team,
                children: playerChildren
            };
        });
        let leagueNode = {
            key: String(league.id),
            data: league,
            children
        };
        leagueTree.push(leagueNode);
    }

    return leagueTree;
}

export const handleGetDatabases = async () => {
    let databases = await databaseController.getAllDatabases();
    databases = databases.filter(db => db.startsWith('fbgm_'));
    let existing_db_names = databases.map(db => ({ formatted: db.replace('fbgm_', '').replace('_', ' '), original: db }));
    return {
        names: existing_db_names,
        databases: databases
    };
}

export const handleCreateNewCareer = (obj: any) => {
    let create_user = {
        id: 0,
        first: obj.first,
        last: obj.last,
        age: obj.age,
        exp: obj.exp,
        skill: obj.skill,
        team_id: obj.team_id
    }
    setTimeout(() => {
        databaseController.createNewDatabase(create_user)
    }, 2000);
}