import { gql } from "@apollo/client";

export const typeDefs = gql`
  type User {
    _id: ID
    login: String
    permission: String
  }
  extend type Query {
    user: User!
    token: String!
  }
`;

export const GET_USER_FROM_CLIENT = gql`
  query GetUserFromClient {
    user @client
  }
`;
