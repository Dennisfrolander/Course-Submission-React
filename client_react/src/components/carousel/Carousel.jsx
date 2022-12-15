import React from "react";
import Carousel from "better-react-carousel";
import "./carousel.css";
import { BsStarFill, BsFillPlayFill } from "react-icons/bs";
import HeroTitle from "../Hero_Title/Hero_Title";
import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import Spinner from "../spinner/spinner";
import Error from "../Error/Error";

const QUERY_ALL_MOVIES = gql`
  query GetAllPopularMovies {
    PopularMovies {
      id
      poster_path
      title
      vote_average
      trailers {
        id
        trailer_path
      }
    }
  }
`;

const Carouseltest = (props) => {
  const { data, loading, error } = useQuery(QUERY_ALL_MOVIES);
  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <section className="carousel-section">
      <HeroTitle text={"Popular movies"} />
      <Carousel
        cols={6}
        rows={1}
        gap={20}
        loop
        //showDots
        autoplay={8000}
        breakpoint={600}
      >
        {data.PopularMovies.map((movie) => {
          const { id, poster_path, title, vote_average } = movie;
          return (
            <Carousel.Item key={id}>
              <Link
                to={`/movies/${id}`}
                onClick={() => props.handleVisitedClick(movie)}
              >
                <img
                  width="100%"
                  src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                  alt={title}
                  className="img-gallery"
                />
              </Link>
              <div className="d-flex justify-content-center py-2 flex-column">
                <div className="popular-star-container">
                  <span className="popular-star-icon">{<BsStarFill />}</span>
                  <span className="popular-star-rating-text">
                    {vote_average === null ? "No votes" : vote_average}
                  </span>
                </div>
                <div className="watch-popular-trailer">
                  <span className="icon-popular-play">
                    <BsFillPlayFill size={20} />
                  </span>
                  <a
                    className="trailer-text"
                    href={`https://www.youtube.com/watch?v=${movie.trailers[0].trailer_path}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Trailer
                  </a>
                </div>
                <Link
                  to={`/movies/${id}`}
                  style={{ textDecoration: "none" }}
                  onClick={() => props.handleVisitedClick(movie)}
                >
                  <h2 className="popular-movie-title">{title}</h2>
                </Link>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </section>
  );
};

export default Carouseltest;
