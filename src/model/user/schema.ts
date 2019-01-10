import { buildSchema } from 'graphql';

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


export default schema;
