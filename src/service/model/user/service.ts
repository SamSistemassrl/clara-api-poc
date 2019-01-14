import Class from './class';
import UserDataService from '../../../data/mongodb/dataServices/userDataService';

class UserService {
    constructor(){}

    public async create(userData): Promise<Class> {

        const user: Class =  new Class (
            userData.fullName,
            userData.email,
            userData.password
        );

        await UserDataService.create(user);

        return user;
    }

    public async login(email: string, password: string): Promise <any> {
        const hash = '';

        const userByEmail: Class = await this.getByEmail(email);

        if(!userByEmail) return {user: { error: 'Non existent email' }};

        const verifiedUser: boolean = await this.verifyCorrectPassword(userByEmail, hash);

        if(verifiedUser) return {user: { error : 'Incorrect password' }};


    }

    public async getByEmail(email: string): Promise<Class> {

        return await UserDataService.getByEmail(email);
    }

    public verifyCorrectPassword(userByEmail: Class, hash: string): boolean {
        return userByEmail.getPassword() === hash;
    }

}

export default new UserService();
