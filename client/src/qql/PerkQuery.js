import { gql } from "@apollo/client";
import { CORE_PERK_FIELDS, MAIN_FIELDS } from "./Fragments";

export const GET_ALL_PERKS_QUERY = gql`
  query GetPerks {
    perks {
      id
      title
    }
  }
`;

export const GET_PERK_QUERY = gql`
  query GetPerkQuery($id: String!) {
    perk(id: $id) { ${CORE_PERK_FIELDS} }
    skills { ${MAIN_FIELDS} }
    spells { ${MAIN_FIELDS} }
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
    }
  }
`;
