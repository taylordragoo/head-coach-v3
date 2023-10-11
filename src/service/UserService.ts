import User from '@/models/User';

export default class UserService {

    handleCreateNewUser(obj)
    {
        User.insert({
            data: {
                id: 0,
                first: obj.first,
                last: obj.last,
                age: obj.age,
                exp: obj.exp,
                skill: obj.skill,
                team_id: obj.team_id
            }
        })
    }
}
