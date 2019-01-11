import Class from './class';
import CompanyDataService from '../../../data/mongodb/dataServices/companyDataService';

class CompanyService {
    constructor(){}

    public async create(companyData): Promise<Class> {

        const company: Class =  new Class (
            companyData.id,
            companyData.name,
        );

        await CompanyDataService.create(company);

        return company;
    }

    public async getByName(name: string): Promise<Class> {
        return await CompanyDataService.getByName(name);
    }

    public async getById(id) : Promise <Class> {
        return await CompanyDataService.getById(id);
    }
}

export default new CompanyService();
