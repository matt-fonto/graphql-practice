const { UserList, MovieList } = require("../fakeData");
const _ = require("lodash");

// resolvers = function that will be executed when a query is made
const resolvers = {
  //QUERY RESOLVERS, GET
  Query: {
    //USER RESOLVERS
    //users(): it is the function that will be executed when a query is made
    users: () => {
      return UserList;
    },
    // parent: it is the object that contains the data of the previous query
    // args: it is the object that contains the arguments that we pass to the query, in this case the ID
    user: (parent, args) => {
      //Number = convert the string to a number
      return UserList.find((user) => user.id === Number(args.id));
    },
    //MOVIE RESOLVERS
    movies: () => {
      return MovieList;
    },
    movie: (parent, args) => {
      return MovieList.find((movie) => movie.id === Number(args.id));
    },
  },
  //USER RESOLVERS
  User: {
    favoriteMovies: () => {
      // return the range of the movies that are before 2000
      return MovieList.filter((movie) => movie.yearOfPublication < 2000);
    },
  },
  // MUTATION RESOLVERS, ADD, UPDATE, DELETE
  Mutation: {
    // createUser: we add a user to the list
    createUser: (parent, args) => {
      // user: it is the object that will be added to the list
      const user = args.input;
      // we get the last id of the list and we add 1 to it
      const lastId = UserList[UserList.length - 1].id;
      // we add the new id to the user
      user.id = lastId + 1;

      // we add the user to the list
      UserList.push(user);

      // we return the user
      return user;
    },
    // updateUsername: we update the username of a user
    updateUsername: (parent, args) => {
      const { id, newUsername } = args.input;

      // we find the user in the list
      const user = UserList.find((user) => user.id === Number(id));

      // we update the username
      user.username = newUsername;

      return user;
    },
    // deleteUser: we delete a user from the list
    deleteUser: (parent, args) => {
      const id = args.id;

      // remove the user from the list
      _.remove(UserList, (user) => user.id === Number(id));
      return null;
    },
  },
};

module.exports = { resolvers };
