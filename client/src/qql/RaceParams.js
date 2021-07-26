import gql from "graphql-tag";
import { attributes, perk, skill, spell } from "./QueryConstants";

export const GET_ALL_RACES_QUERY = gql`
  query {
    races {
      id
      title
      imgLink
    }
  }
`;

export const GET_RACE_QUERY = gql`
  query GetRaceQuery($id: String!) {    
    skills { ${skill} }
    spells { ${spell} }
    perks { ${perk} }
    race(id: $id) {
      id
      title
      imgLink
      look
      lifeSpan
      description
      height
      culture
      attributes { ${attributes} }
      perks { id title description }
      skills { id title description }
      spells { id title description }
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
      culture: $culture
      attributes: $attributes
      skills: $skills
      spells: $spells
      perks: $perks
    ) {
      id
      title
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
      culture: $culture
      attributes: $attributes
      skills: $skills
      spells: $spells
      perks: $perks
    ) {
      id
      title
    }
  }
`;
