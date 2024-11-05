import User from '@/models/User';
import { WorldController } from '@/controllers/index';
import { UserService } from '@/service';

export default class UserController {
    userService: UserService

    constructor() {
        this.userService = new UserService()
    }

    async create(obj: any) {
        await this.userService.handleCreateNewUser(obj)
        console.log("User Created");
    }
}
