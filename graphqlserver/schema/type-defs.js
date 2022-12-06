import { gql } from "apollo-server";

export const typeDefs = gql`
  type Trailer {
    id: ID!
    trailer_path: String!
    PopularMovies: ID!
  }

  type PopularMovie {
    id: ID!
    poster_path: String!
    title: String!
    vote_average: Float
    trailers: [Trailer!]
  }

  type Query {
    PopularMovies: [PopularMovie!]
    Trailers: [Trailer!]
  }
`;
