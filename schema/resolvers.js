const { UserList, MovieList } = require("../fakeData");

const resolvers = {
  //QUERY RESOLVERS
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
  // MUTATION RESOLVERS
  Mutation: {
    // createUser: we add a user to the list
    createUser: (parent, args) => {
      const user = args.input;
      const lastId = UserList[UserList.length - 1].id;
      user.id = lastId + 1;

      UserList.push(user);

      return user;
    },
    // updateUser: we update the username of a user
    updateUser: (parent, args) => {
      // we destructure the input object
      const { id, newUsername } = args.input;
      let userUpdated;

      // we find the user in the list and update the username
      UserList.forEach((user) => {
        if (user.id === Number(id)) {
          user.username = newUsername;
          userUpdated = user;
        }
      });

      return userUpdated;
    },
  },
};

module.exports = { resolvers };
