const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');
// const User = require ('./model/user/user.ts');
// const userSchema = require ('./model/user/schema.ts');

const schema = buildSchema(`
  type User {
    id: Int!
    firstName: String!
    lastName: String!
  }

  type Query {
    getUser(id: Int): User
  }
`);

class User {
    constructor(id, firstName, lastName) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    static getUser(id) {
        return new User(id, 'Lucas', 'Lopez');
    }

}


const root = {
    getUser: function ({id}) {
        return User.getUser(id);
    }
};

const app = express();

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(4000);

console.log('Running a GraphQL API server at localhost:4000/graphql');