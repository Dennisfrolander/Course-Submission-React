import React from "react";
import { Link } from "react-router-dom";
import Hero from "../Hero_Title/Hero_Title";
import "./searchview.css";
import { BsStarFill } from "react-icons/bs";
import BackButton from "../backButton/BackButton";

const Moviecard = ({ movie, handleVisitedClick }) => {
  const posterURL = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const missingImageURL =
    "https://via.placeholder.com/500?text=No+Image+Available";

  return (
    <div className="col-lg-2 col-md-3 my-4">
      <div>
        <Link
          to={`/movies/${movie.id}`}
          onClick={() => handleVisitedClick(movie)}
        >
          <img
            src={movie.poster_path === null ? missingImageURL : posterURL}
            width="100%"
            height={"300px"}
            alt={movie.original_title}
            className="img-gallery"
          />
        </Link>
        <div className="d-flex justify-content-center py-2 flex-column">
          <div className="popular-star-container">
            <span className="popular-star-icon">{<BsStarFill />}</span>
            <span className="popular-star-rating-text">
              {movie.vote_average === 0 ? "No votes" : movie.vote_average}
            </span>
          </div>
          <h2 className="popular-movie-title">{movie.title}</h2>
        </div>
      </div>
    </div>
  );
};

const Searchview = ({ keyword, searchResults, handleVisitedClick }) => {
  const resultsHtml = searchResults.map((obj, i) => {
    return (
      <Moviecard movie={obj} key={i} handleVisitedClick={handleVisitedClick} />
    );
  });
  return (
    <>
      <BackButton />
      {resultsHtml && (
        <div className="container">
          <Hero
            text={
              searchResults.length === 0
                ? `No results for "${keyword}", try again!`
                : `You searched for "${keyword}"`
            }
          />

          <div className="row justify-content-center"> {resultsHtml}</div>
        </div>
      )}
    </>
  );
};

export default Searchview;
