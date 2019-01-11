import { buildSchema } from 'graphql';

const schema = buildSchema(`
  type User {
    id: Int!
    firstName: String!
    lastName: String!
    email: String!
  }

  type Query {
    getById(id: Int): User,
    getByEmail(email: String): User
  }
`);


export default schema;
