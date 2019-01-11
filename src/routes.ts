import UsersRouter from './modules/user/routes';
import CompanyRouter from './modules/company/routes';
const express = require('express');

const router = express.Router();

router.use('/users', UsersRouter);
router.use('/companies', CompanyRouter);

router.get('/', (req, res) => {
    res.send('Hello World!');
});

export default router;
