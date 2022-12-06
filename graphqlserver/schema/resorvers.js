import { PopularMovies } from "../fakeData.js";

export const resolvers = {
  Query: {
    PopularMovies() {
      return PopularMovies;
    },
  },
};
