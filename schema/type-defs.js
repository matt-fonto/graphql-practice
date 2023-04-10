const { gql } = require("apollo-server");

//In this file, we define the schema of the graphQL
const typeDefs = gql`
  # type User = the type of the object that we are going to return
  type User {
    id: ID!
    name: String! # ! means required
    username: String!
    age: Int!
    nationality: Nationality! # the type of the field is an enum we defined
    friends: [User] # list of users
    # for favoriteMovies, we are going to create a resolver
    favoriteMovies: [Movie] # list of movies
  }

  type Movie {
    id: ID!
    title: String!
    yearOfPublication: Int!
    isInTheaters: Boolean!
  }

  type Query {
    # [User!]! = the list of users is required and the User in the list is required too
    users: [User!]! # list of users
    # here, we pass an argument to the function
    user(id: ID!): User! # Single user
    movies: [Movie!]!
    movie(id: ID!): Movie!
  }

  # input:  instead of passing the arguments directly to the function, we pass an object that we create
  input CreateUserInput {
    name: String!
    username: String!
    age: Int!
    nationality: Nationality
  }

  input UpdateUsernameInput {
    #complete the code to update the user
    id: ID!
    newUsername: String!
  }

  type Mutation {
    # createUSer
    createUser(input: CreateUserInput!): User!
    # updateUser
    updateUser(input: UpdateUsernameInput!): User!
  }

  # enum: it is a list of values that we can use in the schema
  enum Nationality {
    CANADA
    BRAZIL
    INDIA
    GERMANY
    CHILE
  }
`;

module.exports = { typeDefs };
