const { gql } = require("apollo-server");
const { typeDefs: userTypeDefs } = require("./user");
const { typeDefs: movieTypeDefs } = require("./movie");
const { typeDefs: enumsTypeDefs } = require("./enums");

// typeDef = type definition of the schema
const typeDefs = gql`
  ${userTypeDefs}
  ${movieTypeDefs}
  ${enumsTypeDefs}
`;

module.exports = {
  typeDefs,
};
