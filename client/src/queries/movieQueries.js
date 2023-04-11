import { gql } from "@apollo/client";

// similar queries to what we were doing in the sandbox
const GET_MOVIES = gql`
  query getMovies {
    movies {
      id
      title
      yearOfPublication
      isInTheaters
    }
  }
`;

export { GET_MOVIES };
