import { PopularMovies } from "../dataBase/popularMovies.js";
import { Trailers } from "../dataBase/trailers.js";
import { MovieCredits } from "../dataBase/moviecredits.js";

export const resolvers = {
  Query: {
    PopularMovies: () => PopularMovies,
    Trailers: () => Trailers,
    MovieCredits: () => MovieCredits,
  },
  PopularMovie: {
    trailers: (parent) => {
      return Trailers.filter((trailer) => trailer.PopularMovies === parent.id);
    },
    movieCredits: (parent) => {
      return MovieCredits.filter(
        (credit) => credit.PopularMoviesId === parent.id
      );
    },
  },
};
