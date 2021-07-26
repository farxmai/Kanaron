import gql from "graphql-tag";
import { perk, skill, spell } from "./QueryConstants";

export const GET_ALL_PERKS_QUERY = gql`
  query {
    perks {
      id
      title
    }
  }
`;

export const GET_PERK_QUERY = gql`
  query GetPerkQuery($id: String!) {
    perk(id: $id) { ${perk} }
    skills { ${skill} }
    spells { ${spell} }
  }
`;

export const UPDATE_PERK_MUTATION = gql`
  mutation UpdatePerkMutation(
    $id: ID!
    $title: String!
    $description: String
    $attributes: AttributesMutation
    $skills: [String]
    $spells: [String]
  ) {
    updatePerk(
      id: $id
      title: $title
      description: $description
      attributes: $attributes
      skills: $skills
      spells: $spells
    ) {
      id
      title
    }
  }
`;

export const CREATE_PERK_MUTATION = gql`
  mutation CreatePerkMutation(
    $title: String!
    $description: String
    $attributes: AttributesMutation
    $skills: [String]
    $spells: [String]
  ) {
    addPerk(
      title: $title
      description: $description
      attributes: $attributes
      skills: $skills
      spells: $spells
    ) {
      id
      title
    }
  }
`;
