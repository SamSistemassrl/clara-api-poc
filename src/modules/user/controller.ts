import User from '../../data/model/user';
import Repository from '../../data/repository/repository';

class UserController {

    private repository: Repository<User>;

    constructor(repository: Repository<User>){
        this.repository = repository;
    }

    public getUserById(id) : User { // async getUserById(id) : Promise<User> {..}
        return this.repository.getUserById(id); // return await ..
    }
}

export default new UserController(new Repository<User>());
