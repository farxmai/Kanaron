import { gql } from "@apollo/client";
import {
  ATTRIBUTES_FIELDS,
  CORE_ITEM_FIELDS,
  CORE_MATERIAL_FIELDS,
  CORE_QUALITY_FIELDS,
  MAIN_FIELDS,
} from "./Fragments";

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
      hpBonus
      mpBonus
      item {
        ${CORE_ITEM_FIELDS}
      }
      material {
        ${CORE_MATERIAL_FIELDS}
      }
      quality {
        ${CORE_QUALITY_FIELDS}
      }
      attributes { ${ATTRIBUTES_FIELDS} }
      skills { ${MAIN_FIELDS} }
      spells { ${MAIN_FIELDS} }
      perks { ${MAIN_FIELDS} }
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
    $hpBonus: Int
    $mpBonus: Int
    $skills: [String]
    $perks: [String]
    $spells: [String]
    $attributes: AttributesMutation
  ) {
    updateCurrentItem(
      id: $id
      title: $title
      item: $item
      material: $material
      quality: $quality
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
    $item: String
    $material: String
    $quality: String
    $hpBonus: Int
    $mpBonus: Int
    $skills: [String]
    $perks: [String]
    $spells: [String]
    $attributes: AttributesMutation
  ) {
    addCurrentItem(
      title: $title
      item: $item
      material: $material
      quality: $quality
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

export const DELETE_ITEM_MUTATION = gql`
  mutation DeleteItemMutation($id: ID!) {
    removeCurrentItem(id: $id) {
      id
    }
  }
`;

/////////////////////////////////////////////////////////////////////////

export const GET_ALL_ITEM_TYPES_QUERY = gql`
  query GetItemTypes {
    items {
      id
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
    $imgLink: String
    $cost: Int
    $weight: Int
    $type: String
    $typeProperties: TypePropertiesMutation
  ) {
    updateItem(
      id: $id
      title: $title
      description: $description
      imgLink: $imgLink
      cost: $cost
      weight: $weight
      type: $type
      typeProperties: $typeProperties
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
    $imgLink: String
    $cost: Int
    $weight: Int
    $type: String
    $typeProperties: TypePropertiesMutation
  ) {
    addItem(
      title: $title
      description: $description
      imgLink: $imgLink
      cost: $cost
      weight: $weight
      type: $type
      typeProperties: $typeProperties
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

/////////////////////////////////////////////////////////////////////////

export const GET_ALL_ITEM_MATERIALS_QUERY = gql`
  query GetItemMaterials {
    materials {
      id
      title
      type
    }
  }
`;

export const GET_ITEM_MATERIAL_QUERY = gql`
  query GetItemMaterialQuery($id: String!) {
    material(id: $id) {
      ${CORE_MATERIAL_FIELDS}
    }
  }
`;

export const UPDATE_ITEM_MATERIAL_MUTATION = gql`
  mutation UpdateItemMaterialMutation(
    $id: ID!
    $title: String
    $description: String
    $type: String
    $index: Int
  ) {
    updateMaterial(id: $id, title: $title, description: $description, type: $type, index: $index) {
      id
      title
    }
  }
`;

export const CREATE_ITEM_MATERIAL_MUTATION = gql`
  mutation CreateItemMaterialMutation(
    $title: String
    $description: String
    $type: String
    $index: Int
  ) {
    addMaterial(title: $title, description: $description, type: $type, index: $index) {
      id
      title
    }
  }
`;

export const DELETE_ITEM_MATERIAL_MUTATION = gql`
  mutation DeleteItemMaterialMutation($id: ID!) {
    removeMaterial(id: $id) {
      id
    }
  }
`;

/////////////////////////////////////////////////////////////////////////

export const GET_ALL_ITEM_QUALITIES_QUERY = gql`
  query GetItemQualities {
    qualities {
      id
      title
      type
      color
    }
  }
`;

export const GET_ITEM_QUALITY_QUERY = gql`
  query GetItemQualityQuery($id: String!) {
    quality(id: $id) {
      ${CORE_QUALITY_FIELDS}
    }
  }
`;

export const UPDATE_ITEM_QUALITY_MUTATION = gql`
  mutation UpdateItemQualityMutation(
    $id: ID!
    $title: String
    $description: String
    $type: String
    $index: Int
    $color: String
  ) {
    updateQuality(
      id: $id
      title: $title
      description: $description
      type: $type
      index: $index
      color: $color
    ) {
      id
      title
    }
  }
`;

export const CREATE_ITEM_QUALITY_MUTATION = gql`
  mutation CreateItemQualityMutation(
    $title: String
    $description: String
    $type: String
    $index: Int
    $color: String
  ) {
    addQuality(
      title: $title
      description: $description
      type: $type
      index: $index
      color: $color
    ) {
      id
      title
    }
  }
`;

export const DELETE_ITEM_QUALITY_MUTATION = gql`
  mutation DeleteItemQualityMutation($id: ID!) {
    removeQuality(id: $id) {
      id
    }
  }
`;
