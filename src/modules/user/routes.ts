import UserController from './controller';
import schema from './schema';
const graphqlHTTP = require('express-graphql');
const express = require('express');

const router = express.Router();

console.log('Route /users');

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
    res.send('Hello User!');
});

router.get('/{id}', (req, res) => {
    res.send(`Returns the user ${req.query.id}`);
});



export default router;
