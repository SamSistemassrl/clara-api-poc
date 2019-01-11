import Class from './class';
import UserDataService from '../../../data/mongodb/dataServices/userDataService';

class UserService {
    constructor(){}

    public async create(userData): Promise<Class> {

        const user: Class =  new Class (
            userData.id,
            userData.firstName,
            userData.lastName,
            userData.email
        );

        // await UserDataService.create(user);

        return user;
    }

    public async getByEmail(email: string): Promise<Class> {

        const user: Class =  new Class (
            7,
            'Jhon',
            'Snow',
            email
        );

        return user;

        // return await UserDataService.getByEmail(email);
    }

    public async getById(id) : Promise <Class> {
        const user: Class =  new Class (
            id,
            'Daenerys',
            'Targaryen',
            'dracarys@gmail.com'
        );

        return user;

        // return await UserDataService.getById(id);
    }
}

export default new UserService();
