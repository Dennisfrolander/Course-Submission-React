import React, { useEffect } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "./home.css";
import Carousel from "../carousel/Carousel";
import Recentlyviewed from "../recentlyviewed/Recentlyviewed";

const Gallery = ({
  visitedMovies,
  setVisitedMovies,
  addVisitedMovie,
  recentlyViewedText,
  setRecentlyViewedText,
}) => {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:4000/graphql",
  });

  useEffect(() => {
    const recentlyStoredMovies = JSON.parse(
      localStorage.getItem("recently-viewed-movies")
    );
    if (recentlyStoredMovies) {
      setVisitedMovies([...recentlyStoredMovies]);
      setRecentlyViewedText("");
    }
  }, [setVisitedMovies, setRecentlyViewedText]);

  const removeAllfromLocalStorage = () => {
    localStorage.clear();
    setVisitedMovies([]);
    setRecentlyViewedText("You have no recently viewed pages");
  };

  return (
    <main>
      <section>
        <ApolloProvider client={client}>
          <Carousel handleVisitedClick={addVisitedMovie} />
        </ApolloProvider>
      </section>
      <section>
        <Recentlyviewed
          handleVisitedClick={addVisitedMovie}
          gallery={visitedMovies}
          removeAllfromLocalStorage={removeAllfromLocalStorage}
          recentlyViewedText={recentlyViewedText}
        />
      </section>
    </main>
  );
};
export default Gallery;
