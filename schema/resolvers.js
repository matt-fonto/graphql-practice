const { UserList } = require("../fakeData");

const resolvers = {
  Query: {
    //users(): it is the function that will be executed when a query is made
    users() {
      return UserList;
    },
    user(id) {
      return UserList.find((user) => user.id === id);
    },
  },
};

module.exports = { resolvers };
