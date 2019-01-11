import Class from '../../../service/model/user/class';

export default interface IUser {
    create(user: Class): Promise<Class>;
    getByEmail(email: string): Promise<Class>;
    getById(id: number): Promise<Class>;
}
