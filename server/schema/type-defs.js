import { gql } from "apollo-server";

export const typeDefs = gql`
  type Trailer {
    id: ID!
    trailer_path: String!
    PopularMovies: ID!
  }

  type MovieCredit {
    id: ID!
    name: String!
    original_name: String!
    profile_path: String
    character: String!
    PopularMoviesId: ID!
  }

  type PopularMovie {
    id: ID!
    poster_path: String!
    title: String!
    vote_average: Float
    trailers: [Trailer!]
    movieCredits: [MovieCredit!]
  }

  type Query {
    PopularMovies: [PopularMovie!]
    Trailers: [Trailer!]
    MovieCredits: [MovieCredit!]
  }
`;
