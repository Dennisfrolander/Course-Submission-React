import { gql } from "apollo-server";

export const typeDefs = gql`
  type PopularMovie {
    id: ID!
    poster_path: String!
    title: String!
    vote_average: Float
  }

  type Query {
    PopularMovies: [PopularMovie!]!
  }
`;
