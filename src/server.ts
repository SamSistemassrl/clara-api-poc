import Logger from './logger';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import Connector from './data/mongodb/connector';

const PORT = process.env.PORT || 4000;
const HOST = process.env.HOST || '0.0.0.0';

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


            server.listen(PORT, HOST, () => {
                Logger.info(`Server - Up and running on: ${process.env.HOST}:${process.env.PORT}`);
            });


        } catch (error) {
            Logger.error(error.stack);
            Logger.error(`Server - There was something wrong: ${error}`);
        }
    }
}

export default new Server();

