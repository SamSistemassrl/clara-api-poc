const express = require('express');
const router = express.Router();
const UsersRouter = require('./model/user/routes.ts');

router.use('/users', UsersRouter);

router.get('/', (req, res) => {
    res.send('Hello World!');
});

module.exports = router;