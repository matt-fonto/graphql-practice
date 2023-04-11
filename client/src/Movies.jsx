import { useQuery } from "@apollo/client";
import { GET_MOVIES } from "./queries/movieQueries";

export default function Movies() {
  const { loading, error, data } = useQuery(GET_MOVIES);

  if (loading) return "loading...";
  if (error) return `Error! ${error.message}`;

  const { movies } = data;

  return (
    <div>
      {movies &&
        movies.map((movie) => {
          const { id, title, yearOfPublication, isInTheaters } = movie;

          return (
            <ul>
              <li>{title}</li>
              <li>{yearOfPublication}</li>
            </ul>
          );
        })}
    </div>
  );
}
