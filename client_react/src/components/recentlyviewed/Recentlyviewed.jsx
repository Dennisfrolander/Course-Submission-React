import React from "react";
import "./recentlyviewed.css";
import HeroTitle from "../Hero_Title/Hero_Title";
import { Link } from "react-router-dom";
const Recentlyviewed = (props) => {
  return (
    <>
      <section className="row recently-viewed-section">
        <HeroTitle text={"Recently viewed"} />
        <span
          onClick={props.removeAllfromLocalStorage}
          href="/"
          className="clear-all-recently-viewed"
        >
          Clear all
        </span>
        <p id="recently-viewed-text">{props.recentlyViewedText}</p>
        {props.gallery.map((movie) => {
          const { id, poster_path, title } = movie;
          const imageURL = `https://image.tmdb.org/t/p/w500${poster_path}`;
          const missingImageURL =
            "https://via.placeholder.com/500?text=No+Image+Avaiable";
          return (
            <div className="col-lg-2 col-md-3 col-sm-6" key={id}>
              <Link
                to={`/movies/${id}`}
                onClick={() => props.handleVisitedClick(movie)}
              >
                <img
                  width="100%"
                  height={"275px"}
                  src={poster_path === null ? missingImageURL : imageURL}
                  alt={title}
                  className="img-gallery"
                />
              </Link>
              <div className="d-flex justify-content-center py-2 flex-column text-center">
                <Link
                  to={`/movies/${id}`}
                  style={{ textDecoration: "none" }}
                  onClick={() => props.handleVisitedClick(movie)}
                >
                  <h2 className="popular-movie-title">{title}</h2>
                </Link>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};
export default Recentlyviewed;
