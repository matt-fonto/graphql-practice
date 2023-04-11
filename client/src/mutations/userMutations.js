import { gql } from "@apollo/client";

const CREATE_USER = gql`
  # CreateUserInput was declared in the backend
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      name
      id
    }
  }
`;

export { CREATE_USER };
