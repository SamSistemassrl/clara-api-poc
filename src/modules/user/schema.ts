import { buildSchema } from 'graphql';

const schema = buildSchema(`
  type User {
    fullName: String!
    email: String!
    password: String!
  }

  type Query {
    user(email: String!): User
    login(email: String!, password: String!): User
  }
`);


export default schema;
