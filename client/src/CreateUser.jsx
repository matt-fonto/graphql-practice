import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "./mutations/userMutations";
import { GET_USERS } from "./queries/userQueries";

export default function CreateUser() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [age, setAge] = useState(0);
  const [nationality, setNationality] = useState("");

  const [createUser] = useMutation(CREATE_USER, {
    // refetchQueries: it is an array of queries that we want to refetch after we have executed the mutation
    refetchQueries: [{ query: GET_USERS }],
  });

  return (
    <div>
      <h1>Create User</h1>
      <div>
        <input
          type="text"
          placeholder="Name"
          // we change the value of the state based on the value being passed
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="text"
          placeholder="Username"
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          type="number"
          placeholder="Age"
          onChange={(event) => setAge(event.target.value)}
        />
        <input
          type="text"
          placeholder="Nationality"
          onChange={(event) => setNationality(event.target.value.toUpperCase())}
        />
      </div>
      <button
        onClick={() => {
          createUser({
            variables: {
              input: {
                name,
                username,
                age: Number(age),
                nationality,
              },
            },
          });
        }}
      >
        Create
      </button>
    </div>
  );
}
