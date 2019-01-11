import Repository from "../../repository/mongoRepository";
import UserModel from '../model/user';
import IUser from '../../interfaces/modules/userInterface';
import Class from '../../../service/model/user/class';
import Logger from "../../../logger";
import Factory from "../factory";

class UserDataService implements IUser {

    constructor(private repository: Repository<Class>, private factory: Factory<Class>) {}

    public async create(user: Class): Promise<Class> {

        const entity: Class = await this.repository.createInstance(user);

        Logger.info('User created.');
        return this.repository.save(entity);
    }

    public async getByEmail(email: string): Promise<any> {

        const entity = await this.repository.getByField('email', email, {first: true});

        if (!entity) return null;

        return this.factory.getModelFromEntity(entity);
    }

    public async getById(id: number): Promise<any> {
        const entity = await this.repository.getByField('id', id, {first: true});

        if (!entity) return null;

        return this.factory.getModelFromEntity(entity);
    }

}

export default new UserDataService(new Repository<Class>(UserModel), new Factory<Class>(new Class()));
