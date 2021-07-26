import gql from "graphql-tag";
import { itemType } from "./QueryConstants";

export const GET_ALL_ITEMS_QUERY = gql`
  query {
    items {
      id
      title
      description
      type
    }
  }
`;

export const GET_ITEM_QUERY = gql`
  query GetItemQuery($id: String!) {
    perks {
      id
      title
      description
    }
    skills {
      id
      title
      description
    }
    spells {
      id
      title
      description
    }
    item(id: $id) { ${itemType} }
  }
`;

export const UPDATE_ITEM_MUTATION = gql`
  mutation CreateItemMutation(
    $id: ID!
    $title: String
    $description: String
    $effects: String
    $imgLink: String
    $cost: Int
    $weight: Int
    $type: String
    $typeProperties: TypePropertiesMutation
    $hpBonus: Int
    $mpBonus: Int
    $skills: [String]
    $perks: [String]
    $spells: [String]
    $attributes: AttributesMutation
  ) {
    updateItem(
      id: $id
      title: $title
      description: $description
      effects: $effects
      imgLink: $imgLink
      cost: $cost
      weight: $weight
      type: $type
      typeProperties: $typeProperties
      hpBonus: $hpBonus
      mpBonus: $mpBonus
      skills: $skills
      perks: $perks
      spells: $spells
      attributes: $attributes
    ) {
      id
      title
    }
  }
`;

export const CREATE_ITEM_MUTATION = gql`
  mutation CreateItemMutation(
    $title: String
    $description: String
    $effects: String
    $imgLink: String
    $cost: Int
    $weight: Int
    $type: String
    $typeProperties: TypePropertiesMutation
    $hpBonus: Int
    $mpBonus: Int
    $skills: [String]
    $perks: [String]
    $spells: [String]
    $attributes: AttributesMutation
  ) {
    addItem(
      title: $title
      description: $description
      effects: $effects
      imgLink: $imgLink
      cost: $cost
      weight: $weight
      type: $type
      typeProperties: $typeProperties
      hpBonus: $hpBonus
      mpBonus: $mpBonus
      skills: $skills
      perks: $perks
      spells: $spells
      attributes: $attributes
    ) {
      id
      title
    }
  }
`;
