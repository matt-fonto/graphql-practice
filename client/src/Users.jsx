import { useQuery } from "@apollo/client";
import { GET_USERS } from "./queries/userQueries";

export default function Users() {
  // const {} = useQuery(query);
  const { loading, error, data } = useQuery(GET_USERS);

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
              <li>Username: {username}</li>
              <li>Age: {age}</li>
              <li>Nationality: {nationality}</li>
            </ul>
          );
        })}
    </div>
  );
}
