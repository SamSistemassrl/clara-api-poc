import UsersRouter from './modules/user/routes';
import CompanyRouter from './modules/company/routes';
import Logger from "./logger";
const express = require('express');

const router = express.Router();

router.use((req, res, next) => {
    Logger.info(`${req.method} - ${req.baseUrl}${req.path}`);
    next();
});

router.use('/users', UsersRouter);
router.use('/companies', CompanyRouter);

router.get('/', (req, res) => {
    res.send('Home. Try: /users/graphql !');
});

export default router;
