import UserController from './controller';
import schema from './schema';
const graphqlHTTP = require('express-graphql');
const express = require('express');
import Logger from '../../logger';

const router = express.Router();

Logger.info('Route /users');

const root = {
    getUser: function ({id}) {
        return UserController.getUserById(id);
    }
};

router.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
}));

router.get('/', (req, res) => {
    res.send('Hello UserClass!');
});

router.get('/{id}', (req, res) => {
    res.send(`Returns the user ${req.query.id}`);
});



export default router;
