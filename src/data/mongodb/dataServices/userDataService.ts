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

        Logger.info(JSON.stringify(entity));

        Logger.info('User created.');
        const usr =  await this.repository.save(entity);

        Logger.info(JSON.stringify(usr));

        return usr;
    }

    public async getByEmail(email: string): Promise<any> {

        const entity = await this.repository.getByField('email', email, {first: true});

        Logger.info(JSON.stringify(entity));

        if (!entity) return null;

        return this.factory.getModelFromEntity(entity);
    }

}

export default new UserDataService(new Repository<Class>(UserModel), new Factory<Class>(new Class()));
