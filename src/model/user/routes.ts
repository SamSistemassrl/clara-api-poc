const express = require('express');
const graphqlHTTP = require('express-graphql');
const router = express.Router();
const User = require ('./user.ts');
const schema = require ('./schema.ts');

console.log('Route /users');

const root = {
    getUser: function ({id}) {
        return User.getUser(id);
    }
};

router.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
}));

router.get('/', (req, res) => {
    res.send('Hello World!');
});

router.get('/{id}', (req, res) => {
    res.send('Returns an user');
});



module.exports = router;