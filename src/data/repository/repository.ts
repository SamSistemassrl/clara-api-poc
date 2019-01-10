import User from "../model/user";

class Repository<T> {

    public getUserById(id): User { // async getUserById(id): Promise<T> {..}
        return new User(id, 'Jhon', 'Snow'); // this should connect to clara-storage-poc.. ?
    }
}

export default Repository;
