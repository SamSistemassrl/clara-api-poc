import Logger from './logger';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import Connector from './data/mongodb/connector';
import Constants from './utils/constants';

class Server {

    constructor() {
        this.init();
    }

    public async init() {
        try {
            await Connector.init();

            const server = express();

            server.use(bodyParser.json());
            server.use(require("./routes").default);


            server.listen(Constants.Server.PORT, Constants.Server.HOST, () => {
                Logger.info(`Server - Up and running on: ${process.env.HOST}:${process.env.PORT}`);
            });


        } catch (error) {
            Logger.error(error.stack);
            Logger.error(`Server - There was something wrong: ${error}`);
        }
    }
}

export default new Server();

