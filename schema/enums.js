const { gql } = require("apollo-server");

const typeDefs = gql`
  enum Nationality {
    CANADA
    BRAZIL
    INDIA
    GERMANY
    CHILE
  }
`;

module.exports = {
  typeDefs,
};
