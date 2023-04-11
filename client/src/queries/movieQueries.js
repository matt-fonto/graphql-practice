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

const GET_MOVIE = gql`
  # queryName($variableName: variableType!)
  query getMovie($title: String!) {
    # fieldName(variableName: $variableName
    # $title is the variable we are passing in
    movie(title: $title) {
      id
      title
      yearOfPublication
    }
  }
`;

export { GET_MOVIES, GET_MOVIE };
