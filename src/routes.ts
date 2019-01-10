import UsersRouter from './model/user/routes';
const express = require('express');

const router = express.Router();

router.use('/users', UsersRouter);

router.get('/', (req, res) => {
    res.send('Hello World!');
});

export default router;
