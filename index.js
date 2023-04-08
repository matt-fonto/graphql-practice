const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema/type-defs");
const { resolvers } = require("./schema/resolvers");

//Initialize the ApolloServer
const server = new ApolloServer({
  //typeDefs: it is the schema of the graphQL
  typeDefs,
  //resolvers: it is the function that will be executed when a query is made
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Server is running on ${url}`);
});
