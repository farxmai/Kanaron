import { gql } from "@apollo/client";
import { ATTRIBUTES_FIELDS, MAIN_FIELDS } from "./Fragments";

export const GET_ALL_RACES_QUERY = gql`
  query GetRaces {
    races {
      id
      title
      imgLink
    }
  }
`;

export const GET_RACE_QUERY = gql`
  query GetRaceQuery($id: String!) {
    race(id: $id) {
      id
      title
      imgLink
      look
      lifeSpan
      description
      height
      size
      culture
      attributes { ${ATTRIBUTES_FIELDS} }
      skills { ${MAIN_FIELDS} }
      spells { ${MAIN_FIELDS} }
      perks { ${MAIN_FIELDS} }
    }
  }
`;

export const UPDATE_RACE_MUTATION = gql`
  mutation CreateRaceMutation(
    $id: ID!
    $title: String
    $imgLink: String
    $look: String
    $lifeSpan: Int
    $description: String
    $height: Int
    $size: Int
    $culture: String
    $attributes: AttributesMutation
    $skills: [String]
    $spells: [String]
    $perks: [String]
  ) {
    updateRace(
      id: $id
      title: $title
      imgLink: $imgLink
      look: $look
      lifeSpan: $lifeSpan
      description: $description
      height: $height
      size: $size
      culture: $culture
      attributes: $attributes
      skills: $skills
      spells: $spells
      perks: $perks
    ) {
      id
    }
  }
`;

export const CREATE_RACE_MUTATION = gql`
  mutation CreateRaceMutation(
    $title: String!
    $imgLink: String!
    $look: String!
    $lifeSpan: Int!
    $description: String!
    $height: Int!
    $size: Int!
    $culture: String!
    $attributes: AttributesMutation!
    $skills: [String]
    $spells: [String]
    $perks: [String]
  ) {
    addRace(
      title: $title
      imgLink: $imgLink
      look: $look
      lifeSpan: $lifeSpan
      description: $description
      height: $height
      size: $size
      culture: $culture
      attributes: $attributes
      skills: $skills
      spells: $spells
      perks: $perks
    ) {
      id
    }
  }
`;

export const DELETE_RACE_MUTATION = gql`
  mutation DeleteRaceMutation($id: ID!) {
    removeRace(id: $id) {
      id
    }
  }
`;
