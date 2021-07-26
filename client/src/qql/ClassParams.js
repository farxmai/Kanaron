import gql from "graphql-tag";
import { perk, skill, spell, attributes } from "./QueryConstants";

export const GET_ALL_CLASSES_QUERY = gql`
  query {
    classes {
      id
      title
      description
    }
  }
`;

export const GET_CLASS_QUERY = gql`
  query GetClassQuery($id: String!) {
    perks { ${perk} }
    skills { ${skill} }
    spells { ${spell} }
    class(id: $id) {
      id
      title
      imgLink
      description
      attributes { ${attributes} }
      perks { id title description }
      skills { id title description }
      spells { id title description }
    }
   
  }
`;

export const UPDATE_CLASS_MUTATION = gql`
  mutation UpdateClassMutation(
    $id: ID!
    $title: String!
    $imgLink: String
    $description: String!
    $attributes: AttributesMutation!
    $skills: [String]
    $spells: [String]
    $perks: [String]
  ) {
    updateClass(
      id: $id
      title: $title
      imgLink: $imgLink
      description: $description
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

export const CREATE_CLASS_MUTATION = gql`
  mutation CreateClassMutation(
    $title: String!
    $imgLink: String
    $description: String!
    $attributes: AttributesMutation!
    $skills: [String]
    $spells: [String]
    $perks: [String]
  ) {
    addClass(
      title: $title
      imgLink: $imgLink
      description: $description
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
