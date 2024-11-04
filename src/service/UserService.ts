import { useRepo } from 'pinia-orm'
import User from '@/models/User';

export default class UserService {

    handleCreateNewUser(obj: any)
    {
        const user = useRepo(User);
        user.save({
            id: 0,
            first: obj.first,
            last: obj.last,
            age: obj.age,
            exp: obj.exp,
            skill: obj.skill,
            team_id: obj.team_id
        })
    }
}
