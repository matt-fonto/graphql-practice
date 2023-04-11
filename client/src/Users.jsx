import { useQuery } from "@apollo/client";
import { GET_USERS } from "./queries/userQueries";
import { useMutation } from "@apollo/client";
import { DELETE_USER } from "./mutations/userMutations";

export default function Users() {
  // const {} = useQuery(query);
  const { loading, error, data } = useQuery(GET_USERS);

  // here, we are using the useMutation hook to execute the mutation to delete
  const [deleteUser] = useMutation(DELETE_USER, {
    // then we are refetching the query to get the updated list of users
    refetchQueries: [{ query: GET_USERS }],
  });

  if (loading) return "loading...";
  if (error) return `Error! ${error.message}`;

  const { users } = data;

  return (
    <div>
      {data &&
        users.map((user) => {
          const { id, name, age, nationality, username } = user;
          return (
            <ul>
              <li>Name: {name}</li>
              <li>Id: {id}</li>
              <li>Username: {username}</li>
              <li>Age: {age}</li>
              <li>Nationality: {nationality}</li>
              <button
                // once the user clicks the button
                onClick={() =>
                  // we call out mutation
                  deleteUser({
                    // passing the id of the user we want to delete
                    variables: {
                      id,
                    },
                  })
                }
              >
                delete
              </button>
            </ul>
          );
        })}
    </div>
  );
}
