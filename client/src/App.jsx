import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
} from "@apollo/client";

import Users from "./Users";
import Movies from "./Movies";
import SearchMovie from "./SearchMovie";

// ApolloCLient: it is a class that we can use to make requests to our GraphQL API
// InMemoryCache: we cache the data in memory, so it is temporary storage for data that is frequently accessed
// ApolloProvider: it is a component that we can use to wrap our entire application and provide access to the Apollo Client to our entire application
// useQuery: it is a hook that we can use to make a query to our GraphQL API

function App() {
  // create a new instance of ApolloClient to make requests to our GraphQL API
  // client:
  const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache(),
    // cache: temporary storage for data that is frequently accessed so it can be retrieved quickly
    // in web development, a cache is used to improve performance by reducing the amount of time it takes
    // to retrieve data from a server
    // So, insteead of requesting the same data from the server everytime, a cache can store the data locally
    // and serve it to the client when it is requested again
  });

  return (
    <>
      <ApolloProvider client={client}>
        <div>
          <h1>List of users</h1>
          <Users />

          <h1>List of Movies</h1>
          <Movies />

          <SearchMovie />
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
