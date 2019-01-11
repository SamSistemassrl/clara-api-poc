import Repository from "../../repository/mongoRepository";
import CompanyModel from '../model/company';
import ICompany from '../../interfaces/modules/companyInterface';
import Class from '../../../service/model/company/class';
import Logger from "../../../logger";
import Factory from "../factory";

class CompanyDataService implements ICompany {

    constructor(private repository: Repository<Class>, private factory: Factory<Class>) {}

    public async create(user: Class): Promise<Class> {

        const entity: Class = await this.repository.createInstance(user);

        Logger.info(JSON.stringify(entity));

        Logger.info('User created.');
        const usr =  await this.repository.save(entity);

        Logger.info(JSON.stringify(usr));

        return usr;
    }

    public async getByName(name: string): Promise<any> {

        const entity = await this.repository.getByField('name', name, {first: true});

        Logger.info(JSON.stringify(entity));

        if (!entity) return null;

        return this.factory.getModelFromEntity(entity);
    }

    public async getById(id: number): Promise<any> {
        const entity = await this.repository.getByField('id', id, {first: true});

        if (!entity) return null;

        return this.factory.getModelFromEntity(entity);
    }

}

export default new CompanyDataService(new Repository<Class>(CompanyModel), new Factory<Class>(new Class()));
