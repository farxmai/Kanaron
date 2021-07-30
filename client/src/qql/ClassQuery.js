import { gql } from "@apollo/client";
import { ATTRIBUTES_FIELDS, MAIN_FIELDS } from "./Fragments";

export const GET_ALL_CLASSES_QUERY = gql`
  query GetClasses {
    classes {
      id
      title
      icon
    }
  }
`;

export const GET_CLASS_QUERY = gql`
  query GetClassQuery($id: String!) {
    class(id: $id) {
      id
      title
      imgLink
      description
      icon
      hpDice
      attributes { ${ATTRIBUTES_FIELDS} }
      perks { ${MAIN_FIELDS} }
      skills { ${MAIN_FIELDS} }
      spells { ${MAIN_FIELDS} }
    }
  }
`;

export const UPDATE_CLASS_MUTATION = gql`
  mutation UpdateClassMutation(
    $id: ID!
    $title: String!
    $imgLink: String
    $description: String!
    $icon: String!
    $attributes: AttributesMutation!
    $hpDice: Int
    $skills: [String]
    $spells: [String]
    $perks: [String]
  ) {
    updateClass(
      id: $id
      title: $title
      imgLink: $imgLink
      description: $description
      icon: $icon
      attributes: $attributes
      hpDice: $hpDice
      skills: $skills
      spells: $spells
      perks: $perks
    ) {
      id
    }
  }
`;

export const CREATE_CLASS_MUTATION = gql`
  mutation CreateClassMutation(
    $title: String!
    $imgLink: String
    $description: String!
    $icon: String!
    $attributes: AttributesMutation!
    $hpDice: Int
    $skills: [String]
    $spells: [String]
    $perks: [String]
  ) {
    addClass(
      title: $title
      imgLink: $imgLink
      description: $description
      icon: $icon
      attributes: $attributes
      hpDice: $hpDice
      skills: $skills
      spells: $spells
      perks: $perks
    ) {
      id
    }
  }
`;

export const DELETE_CLASS_MUTATION = gql`
  mutation DeleteClassMutation($id: ID!) {
    removeClass(id: $id) {
      id
    }
  }
`;
