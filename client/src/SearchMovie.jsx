import { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_MOVIE } from "./queries/movieQueries";

// useLazyQuery: it is different from useQuery because it does not execute the query automatically, but it waits for us to execute it

export default function SearchMovie() {
  const [searchTerm, setSearchTerm] = useState("");

  const [fetchMovie, { data, error }] = useLazyQuery(GET_MOVIE);

  if (error) return `Error! ${error.message}`;

  return (
    <div>
      <input
        type="text"
        placeholder="Search a movie"
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <button
        onClick={() => {
          fetchMovie({
            variables: {
              title: searchTerm,
            },
          });
        }}
      >
        Search
      </button>
      <div>
        {data && data.movie && (
          <div>
            <h2>{data.movie.title}</h2>
            <h2>{data.movie.yearOfPublication}</h2>
          </div>
        )}
      </div>
    </div>
  );
}
