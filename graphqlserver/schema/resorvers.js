import { PopularMovies } from "../dataBase/popularMovies.js";
import { Trailers } from "../dataBase/trailers.js";

export const resolvers = {
  Query: {
    PopularMovies: () => PopularMovies,
    Trailers: () => Trailers,
  },
  PopularMovie: {
    trailers: (parent) => {
      return Trailers.filter((trailer) => trailer.PopularMovies === parent.id);
    },
  },
};
