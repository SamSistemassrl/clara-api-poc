import { User } from '../../data/mongodb/model/user';
import UserClass from '../../service/model/user/userClass';
import Repository from '../../data/repository/mongoRepository';

class UserController {

    private repository: Repository<User>;

    constructor(repository: Repository<User>){
        this.repository = repository;
    }

    public /*async*/ getUserById(id) : UserClass /*Promise<User>*/ {
        // return await this.repository.getById(id);
        return new UserClass(id, 'Jhon', 'Snow');
    }
}

export default new UserController(new Repository<User>(User));
