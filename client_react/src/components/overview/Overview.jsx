import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import BackButton from "../backButton/BackButton";
import { BsStarFill } from "react-icons/bs";
import LoadingSpinner from "../spinner/spinner";
import Error from "../Error/Error";
import "./overview.css";

const MovieView = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=ecaed6d1fff24c3dc5785dd321e879e1&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovieDetails(data);
        setIsLoading(false);
      });
  }, [id]);

  function renderMovieDetails() {
    if (isLoading) {
      return <LoadingSpinner />;
    }
    if (movieDetails) {
      const posterPath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`;
      const missingImageURL =
        "https://via.placeholder.com/500?text=No+Image+Avaiable";
      const {
        release_date,
        overview,
        title,
        vote_average,
        vote_count,
        poster_path,
      } = movieDetails;

      return (
        <>
          <BackButton />
          <section className="container my-5 overview-section d-flex">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <img
                  src={poster_path === null ? missingImageURL : posterPath}
                  alt={title}
                  className="img-fluid shadow rounded"
                />
              </div>
              <div className="col-lg-5 col-md-6 col-sm-6">
                <h2 className="overview-title">{title}</h2>
                <h3 className="overview-headers">Description</h3>
                <p className="overview-text">
                  {overview === "" ? "No description yet" : overview}
                </p>
                <h3 className="overview-headers">Votes</h3>
                <p className="overview-vote-average">
                  {vote_count} <span className="overview-users">users</span>{" "}
                  have given a weighted average vote of {vote_average} / 10
                  {<BsStarFill className="overview-star" />}
                </p>
                <p className="overview-releasedate">
                  Release date: {release_date}
                </p>
                <a
                  className="overview-readmore"
                  href={`https://www.themoviedb.org/movie/${id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read more
                </a>
              </div>
            </div>
            <div></div>
          </section>
        </>
      );
    } else {
      return <Error />;
    }
  }

  return renderMovieDetails();
};

export default MovieView;
