import User from '@/models/User';
import { WorldController } from '@/controllers/index';
import { UserService } from '@/service';

export default class UserController {

    constructor() {
        this.userService = new UserService()
    }

    create(obj) {
        this.userService.handleCreateNewUser(obj)
        console.log("User Created");
    }

    read(obj) {

    }

    update(obj) {

    }

    delete(obj) {

    }
}
