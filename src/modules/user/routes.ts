import UserController from './controller';
import Class from '../../service/model/user/class';
import schema from './schema';
import * as  graphqlHTTP from 'express-graphql';
import * as express from 'express';
import Logger from '../../logger';

const router = express.Router();

Logger.info('Route /users');

const root = {
    getById: function ({id}) {
        return UserController.getById(id);
    },
    getByEmail: function ({email}) {
        return UserController.getByEmail(email);
    },
};

router.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
}));

// TODO: Change paths.
router.get('/email', async (req, res) => {
    const user: Class = await UserController.getByEmail(req.body.email);
    res.status(200).send(user);
});

router.post('/', async (req, res) => {
    const user: Class = await UserController.create(req, res);
    res.status(201).send(user);
});

router.get('/id', async (req, res) => {
    const user: Class = await UserController.getById(req.body.id);
    res.status(200).send(user);
});





export default router;
