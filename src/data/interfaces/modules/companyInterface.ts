import Class from '../../../service/model/company/class';

export default interface ICompany {
    create(user: Class): Promise<Class>;
    getByName(name: string): Promise<Class>;
    getById(id: number): Promise<Class>;
}
