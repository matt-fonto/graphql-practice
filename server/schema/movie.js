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
    movie(title: String!): Movie!
  }
`;

module.exports = {
  typeDefs,
};
