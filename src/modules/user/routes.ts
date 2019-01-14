import UserController from './controller';
import Class from '../../service/model/user/class';
import schema from './schema';
import * as  graphqlHTTP from 'express-graphql';
import * as express from 'express';
import Logger from '../../logger';

const router = express.Router();

Logger.info('Route /users');

const root = {
    user: function ({email}) { // returns all the information needed for the Home Page after login.
        return UserController.getByEmail(email);
    },
    login: function({email, password}) {
        return UserController.login(email, password);
    }
};

router.use('/graphql-user-testing-interface', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
}));

router.get('/', (req, res) => {
   res.status(200).send('Home of the user');
});

router.get('/login', async (data, req, res) => {
    console.log(data);
    res.status(200).send(data);
});

router.post('/login');

router.post('/create', async(req, res) => {
   const user: Class = await UserController.create(req, res);
   res.status(200).send(user);
});

export default router;
