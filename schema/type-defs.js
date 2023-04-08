const { gql } = require("apollo-server");

//In this file, we define the schema of the graphQL
const typeDefs = gql`
  # type User = the type of the object that we are going to return
  type User {
    id: ID!
    name: String! # ! means required
    userName: String!
    age: Int!
    nationality: String!
  }
  type Query {
    # [User!]! = the list of users is required and the User in the list is required too
    users: [User!]! # list of users
    user: User
  }
`;

module.exports = { typeDefs };
