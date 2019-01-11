import Class from '../../service/model/company/class';
import Service from '../../service/model/company/service';
import Logger from '../../logger';
import * as Boom from "boom";

class CompanyController {

    constructor(){}

    public async create(req, res) {
        try {

            Logger.info(`${req.method} - ${req.baseUrl}${req.path}`);

            const { company } = req.body;

            Logger.info(company);

            let newUser: Class = await Service.create(company);

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

    public async getByName(name: string): Promise <Class> {
        try {

            Logger.info(`GET - By email`);

            return await Service.getByName(name);

        } catch (error) {
            return Boom.badRequest(`I think something went wrong... ${error}`);
        }

    }

}

export default new CompanyController();
