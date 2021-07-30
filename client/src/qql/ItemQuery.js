import { gql } from "@apollo/client";
import { CORE_ITEM_FIELDS, CORE_MATERIAL_FIELDS, CORE_QUALITY_FIELDS } from "./Fragments";

export const GET_ALL_ITEMS_QUERY = gql`
  query GetItems {
    currentItems {
      id
      title
      item {
        title
        type
      }
      material {
        title
      }
      quality {
        title
        color
      }
    }
  }
`;

export const GET_ITEM_QUERY = gql`
  query GetItemQuery($id: String!) {
    currentItem(id: $id) {
      id
      title
      item {
        ${CORE_ITEM_FIELDS}
      }
      material {
        ${CORE_MATERIAL_FIELDS}
      }
      quality {
        ${CORE_QUALITY_FIELDS}
      }
    }
  }
`;

export const UPDATE_ITEM_MUTATION = gql`
  mutation UpdateItemMutation(
    $id: ID!
    $title: String
    $item: String
    $material: String
    $quality: String
  ) {
    updateCurrentItem(id: $id, title: $title, item: $item, material: $material, quality: $quality) {
      id
      title
    }
  }
`;

export const CREATE_ITEM_MUTATION = gql`
  mutation CreateItemMutation($title: String, $item: String, $material: String, $quality: String) {
    addCurrentItem(title: $title, item: $item, material: $material, quality: $quality) {
      id
      title
    }
  }
`;

export const DELETE_ITEM_MUTATION = gql`
  mutation DeleteItemMutation($id: ID!) {
    removeCurrentItem(id: $id) {
      id
    }
  }
`;

export const GET_ALL_ITEM_TYPES_QUERY = gql`
  query GetItemTypes {
    items {
      title
      type
    }
  }
`;

export const GET_ITEM_TYPE_QUERY = gql`
  query GetItemTypeQuery($id: String!) {
    item(id: $id) {
      ${CORE_ITEM_FIELDS}
    }
  }
`;

export const UPDATE_ITEM_TYPE_MUTATION = gql`
  mutation UpdateItemTypeMutation(
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

export const CREATE_ITEM_TYPE_MUTATION = gql`
  mutation CreateItemTypeMutation(
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

export const DELETE_ITEM_TYPE_MUTATION = gql`
  mutation DeleteItemTypeMutation($id: ID!) {
    removeItem(id: $id) {
      id
    }
  }
`;
