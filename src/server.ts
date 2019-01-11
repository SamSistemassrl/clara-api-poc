import router from './routes';
import Logger from './logger';
import * as express from 'express';
import * as bodyParser from 'body-parser';

const app = express();

const PORT = process.env.PORT || 4000;
const HOST = process.env.HOST || '0.0.0.0';

app.use(bodyParser.json());
app.use(router);

app.listen(PORT, HOST, () => {
    Logger.info(`Running server at ${HOST}:${PORT}`);
});

