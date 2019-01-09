const { buildSchema } = require('graphql');

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


module.exports = schema;