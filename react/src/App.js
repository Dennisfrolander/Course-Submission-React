import Home from "./components/home/Home";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Error from "./components/Error/Error";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Searchview from "./components/searchview/Searchview";
import Overview from "./components/overview/Overview";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [visitedMovies, setVisitedMovies] = useState([]);
  const [recentlyViewedText, setRecentlyViewedText] = useState(
    "You have no recently viewed pages"
  );

  useEffect(() => {
    if (searchText) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=ecaed6d1fff24c3dc5785dd321e879e1&language=en-US&query=${searchText}&page=1&include_adult=false`
      )
        .then((response) => response.json())
        .then((data) => {
          setSearchResults(data.results);
        });
    }
  }, [searchText]);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("recently-viewed-movies", JSON.stringify(items));
    setRecentlyViewedText("");
  };

  const addVisitedMovie = (movie) => {
    visitedMovies.forEach((item) => {
      let index = visitedMovies.indexOf(item);
      if (item.id === movie.id) {
        visitedMovies.splice(index, 1);
        //saveToLocalStorage([movie, ...visitedMovies]);
      }
    });
    if (visitedMovies.length < 6) {
      //setVisitedMovies([movie, ...visitedMovies]);
      saveToLocalStorage([movie, ...visitedMovies]);
    }
    if (visitedMovies.length > 6) {
      visitedMovies.pop();
      //setVisitedMovies([movie, ...visitedMovies]);
      saveToLocalStorage([movie, ...visitedMovies]);
    }
  };

  return (
    <>
      <Router>
        <Navbar searchText={searchText} setSearchText={setSearchText} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                visitedMovies={visitedMovies}
                setVisitedMovies={setVisitedMovies}
                addVisitedMovie={addVisitedMovie}
                setRecentlyViewedText={setRecentlyViewedText}
                recentlyViewedText={recentlyViewedText}
              />
            }
          />
          <Route path="*" element={<Error />} />
          <Route
            path="/search"
            element={
              <Searchview
                keyword={searchText}
                searchResults={searchResults}
                handleVisitedClick={addVisitedMovie}
              />
            }
          />
          <Route path="/movies/:id" element={<Overview />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
