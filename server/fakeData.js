const UserList = [
  {
    id: 1,
    name: "John",
    username: "john",
    age: 20,
    nationality: "CANADA",
    friends: [
      {
        id: 2,
        name: "Matt",
        username: "MattFonto",
        age: 20,
        nationality: "BRAZIL",
      },
      {
        id: 5,
        name: "Kelly",
        username: "kelly2019",
        age: 5,
        nationality: "CHILE",
      },
    ],
  },
  {
    id: 2,
    name: "Matt",
    username: "MattFonto",
    age: 20,
    nationality: "BRAZIL",
  },
  {
    id: 3,
    name: "Sarah",
    username: "cameron",
    age: 25,
    nationality: "INDIA",
    friends: [
      {
        id: 2,
        name: "Matt",
        username: "MattFonto",
        age: 20,
        nationality: "BRAZIL",
      },
    ],
  },
  {
    id: 4,
    name: "Rafe",
    username: "rafe123",
    age: 60,
    nationality: "GERMANY",
  },
  {
    id: 5,
    name: "Kelly",
    username: "kelly2019",
    age: 5,
    nationality: "CHILE",
  },
];

const MovieList = [
  {
    id: 1,
    title: "2001: A Space Odyssey",
    yearOfPublication: 1968,
    isInTheaters: false,
  },
  {
    id: 2,
    title: "Interstellar",
    yearOfPublication: 2014,
    isInTheaters: false,
  },
  {
    id: 3,
    title: "Inception",
    yearOfPublication: 2010,
    isInTheaters: false,
  },
  {
    id: 4,
    title: "Fight Club",
    yearOfPublication: 1999,
    isInTheaters: false,
  },
];

module.exports = { UserList, MovieList };
