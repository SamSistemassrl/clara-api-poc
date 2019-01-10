import * as Mongoose from 'mongoose';
import Logger from '../../logger';

class DBConnector {
    private connection: any;
    static instance: DBConnector;

    constructor(){}

    public static getInstance(): DBConnector {
        if(!this.instance) this.instance = new DBConnector();
        return this.instance;
    }

    createDbConnection = async (uri: string): Promise<any> => {
        const connection = new Mongoose.Mongoose();
        await connection.connect(uri);

        Logger.info(`Database - successfully connected to ${uri}`);

        return connection;
    };

    public async init(): Promise<any> {
        Logger.info('Database - Creating database connections.');

        (Mongoose as any).Promise = Promise;
        if (!this.connection) {
            Logger.info('Database - Initializing database connection.');
            this.connection = await this.createDbConnection(process.env.MONGO_URI as string);
        } else {
            Logger.info('Database - Connections already initialized, omitting.');
        }
        Logger.info('Database - Done..');
        return this.connection;
    }

    public getConnection(): any {
        return this.connection;
    }

}

export default DBConnector.getInstance();
