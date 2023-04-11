import { gql } from "@apollo/client";

// similar queries to what we were doing in the sandbox
const GET_USERS = gql`
  query getUsers {
    users {
      id
      name
      username
      age
      nationality
    }
  }
`;

export { GET_USERS };
