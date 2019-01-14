import Class from '../../service/model/user/class';
import Service from '../../service/model/user/service';
import * as Boom from "boom";

class UserController {

    constructor(){}

    public async create(req, res): Promise<Class> {
        try {
            const { user } = req.body;

            let newUser: Class = await Service.create(user);

            if (!newUser) throw new Error('Unable to create the new user.');

            return newUser;

        } catch (error) {
            return Boom.badRequest(`I think something went wrong... ${error}`);
        }
    }

    public async login(email: string, password: string): Promise <Class> {
        try {
            const user = await Service.login(email, password);

            if(!user.error) throw new Error(user.error);

            return user;
        }
        catch (error) {
            return Boom.badRequest(`I think something went wrong... ${error}`);
        }
    }

    public async getByEmail(email: string): Promise <Class> {
        try {

            return await Service.getByEmail(email);

        } catch (error) {
            return Boom.badRequest(`I think something went wrong... ${error}`);
        }

    }

}

export default new UserController();
