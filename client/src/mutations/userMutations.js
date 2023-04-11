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

const DELETE_USER = gql`
  mutation DeleteUser($id: ID!) {
    deleteUser(id: $id) {
      id
    }
  }
`;

export { CREATE_USER, DELETE_USER };
