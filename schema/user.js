const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: Nationality!
    friends: [User]!
    favoriteMovies: [Movie]!
  }

  type Query {
    users: [User]!
    user(id: ID!): User!
  }

  input CreateUserInput {
    name: String!
    username: String!
    age: Int!
    nationality: Nationality!
  }

  type Mutation {
    createUser(input: CreateUserInput!): User!
    updateUser(id: ID!, username: String!): User!
  }
`;

module.exports = {
  typeDefs,
};
