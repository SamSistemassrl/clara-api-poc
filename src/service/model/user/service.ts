import Class from './class';
import UserDataService from '../../../data/mongodb/dataServices/userDataService';
import Logger from '../../../logger';
import * as bcrypt from 'bcrypt';
import Constants from "../../../utils/constants";

class UserService {
    constructor(){}

    public async create(userData): Promise<Class> {

        const passwordHash = this.hashPassword(userData.password);

        const user: Class =  new Class (
            userData.fullName,
            userData.email,
            passwordHash
        );

        await UserDataService.create(user);

        return user;
    }

    public async login(email: string, password: string): Promise <any> {
        const passwordHash: string = this.hashPassword(password);

        const userByEmail: Class = await this.getByEmail(email);

        if(!userByEmail) return {user: { error: 'Non existent email' }};

        const verifiedUser = this.verifyCorrectPassword(userByEmail, passwordHash);

        if(!verifiedUser) return {user: { error : 'Incorrect password' }};

        const user: Class = await this.getByEmail(userByEmail.getEmail());

        return user;
    }

    public async getByEmail(email: string): Promise<Class> {

        return await UserDataService.getByEmail(email);
    }

    public async verifyCorrectPassword(userByEmail: Class, hash: string): Promise<boolean> {
        return bcrypt.compareSync(userByEmail.getPassword(), hash);
    }

    private hashPassword(password: string): string { // TODO: Check for errors in the hash.
        const passwordHashed: string = bcrypt.hashSync(password, Constants.Bcrypt.SALT_ROUNDS);;

        return passwordHashed;
    }

}

export default new UserService();
