const { gql } = require("apollo-server");
const { typeDefs: Nationality } = require("./enums");

const typeDefs = gql`
  # type User: type of the object that will be returned
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: Nationality!
    friends: [User]!
    favoriteMovies: [Movie]!
  }

  #Query: the query that will be made to the server
  type Query {
    users: [User]!
    user(id: ID!): User!
  }

  # input: the object that will be passed as an argument to the mutation
  input CreateUserInput {
    name: String!
    username: String!
    age: Int! #we could add default value in case the age isn't passed as an argument
    nationality: Nationality!
  }

  input UpdateUsernameInput {
    id: ID!
    newUsername: String!
  }

  #the mutation that will be made to the server
  type Mutation {
    # here, we define the resolver that will be executed when the mutation is made
    # createUser: it is the name of the mutation
    # input and createUserInput: it is the name and type of the argument that will be passed to the mutation
    createUser(input: CreateUserInput!): User!
    updateUsername(input: UpdateUsernameInput!): User!
    deleteUser(id: ID!): User
  }
`;

module.exports = {
  typeDefs,
};
