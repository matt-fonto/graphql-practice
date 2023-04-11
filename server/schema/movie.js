const { gql } = require("apollo-server");

const typeDefs = gql`
  type Movie {
    id: ID!
    title: String!
    yearOfPublication: Int!
    isInTheaters: Boolean!
  }

  type Query {
    movies: [Movie]!
    movie(id: ID!): Movie!
  }
`;

module.exports = {
  typeDefs,
};
