const { buildSchema } = require('graphql');

const userSchema = buildSchema(`
  type User {
    id: Int!
    firstName: String!
    lastName: String!
  }

  type Query {
    getUser(id: Int): User
  }
`);

exports.module = {
    userSchema,
};