import gql from "graphql-tag";

export const GET_ALL_ITEMS_QUERY = gql`
  query {
    items {
      id
      name
      type
    }
  }
`;

export const GET_ITEM_QUERY = gql`
  query GetItemQuery($id: String!) {
    item(id: $id) {
      id
      name
      type
      description
      cost
      material
      imgLink
      effects
      armor {
        baseDefense
        agilityCut
        type
        specialData
      }
      weapon {
        baseAttack
        critAttack
        critHit
        damageDice
        specialData
        recharge
      }
      attributes {
        Strength
        Agility
        Constitution
        Perception
        Intelligence
        Spirit
        Charisma
      }
    }
  }
`;

export const UPDATE_ITEM_MUTATION = gql`
  mutation CreateItemMutation(
    $id: ID!
    $name: String!
    $type: String!
    $description: String!
    $cost: Int
    $material: String
    $effects: String
    $imgLink: String
    $armor: ArmorMutation
    $weapon: WeaponMutation
    $attributes: AttributesMutation
  ) {
    updateItem(
      id: $id
      name: $name
      type: $type
      description: $description
      cost: $cost
      material: $material
      effects: $effects
      imgLink: $imgLink
      armor: $armor
      weapon: $weapon
      attributes: $attributes
    ) {
      id
      name
    }
  }
`;

export const CREATE_ITEM_MUTATION = gql`
  mutation CreateItemMutation(
    $name: String!
    $type: String!
    $description: String!
    $cost: Int
    $material: String
    $effects: String
    $imgLink: String
    $armor: ArmorMutation
    $weapon: WeaponMutation
    $attributes: AttributesMutation
  ) {
    addItem(
      name: $name
      type: $type
      description: $description
      cost: $cost
      material: $material
      effects: $effects
      imgLink: $imgLink
      armor: $armor
      weapon: $weapon
      attributes: $attributes
    ) {
      id
      name
    }
  }
`;
