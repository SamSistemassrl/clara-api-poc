import Class from '../../service/model/user/class';
import Service from '../../service/model/user/service';
import Logger from '../../logger';
import * as Boom from "boom";

class UserController {

    constructor(){}

    public async create(req, res) {
        try {

            Logger.info(`${req.method} - ${req.baseUrl}${req.path}`);

            const { user } = req.body;

            Logger.info(user);

            let newUser: Class = await Service.create(user);

            if (!newUser) throw new Error('Unable to create the new user.');

            return newUser;

        } catch (error) {
            return res.send(Boom.badRequest(`I think something went wrong... ${error}`));
        }
    }


    public async getById(id: number): Promise <Class> {
        try {

            Logger.info(`GET - By id`);

            return await Service.getById(id);

        } catch (error) {
            return Boom.badRequest(`I think something went wrong... ${error}`);
        }

    }

    public async getByEmail(email: string): Promise <Class> {
        try {

            Logger.info(`GET - By email`);

            return await Service.getByEmail(email);

        } catch (error) {
            return Boom.badRequest(`I think something went wrong... ${error}`);
        }

    }

}

export default new UserController();
