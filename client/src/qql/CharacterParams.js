import { gql } from "@apollo/client";
import {
  ATTRIBUTES_FIELDS,
  CORE_INVENTORY_ITEM_FIELDS,
  CORE_PERK_FIELDS,
  CORE_SKILL_FIELDS,
  CORE_SPELL_FIELDS,
} from "./Fragments";

export const GET_USER_CHARACTERS_QUERY = gql`
  query GetUserCharactersQuery($id: String!) {
    characters(userID: $id) {
      id
      name
      lvl
      race {
        id
        title
      }
      class {
        id
        title
      }
    }
  }
`;

export const GET_CHARACTER_QUERY = gql`
  query GetUserCharacterQuery($id: String!) {
    character(id: $id) {
      userID
      id
      name
      description
      imgLink
      lvl
      coins {
        plat
        gold
        silv
        copr
        iron
      }
      hp
      mp
      mainAttribute
      attributes { ${ATTRIBUTES_FIELDS} }
      inventory {
        id
        items {
          ${CORE_INVENTORY_ITEM_FIELDS}
        }
        equip {
          weapon1{ ${CORE_INVENTORY_ITEM_FIELDS} }
          weapon2{ ${CORE_INVENTORY_ITEM_FIELDS} }
          weapon3{ ${CORE_INVENTORY_ITEM_FIELDS} }
          weapon4{ ${CORE_INVENTORY_ITEM_FIELDS} }
          armor{ ${CORE_INVENTORY_ITEM_FIELDS} }
          helmet{ ${CORE_INVENTORY_ITEM_FIELDS} }
          belt{ ${CORE_INVENTORY_ITEM_FIELDS} }
          coat{ ${CORE_INVENTORY_ITEM_FIELDS} }
          bag{ ${CORE_INVENTORY_ITEM_FIELDS} }
          boots{ ${CORE_INVENTORY_ITEM_FIELDS} }
          amulet{ ${CORE_INVENTORY_ITEM_FIELDS} }
          rings{ ${CORE_INVENTORY_ITEM_FIELDS} }
          pockets{ ${CORE_INVENTORY_ITEM_FIELDS} }
        }
        storages {
          title
          items {
            ${CORE_INVENTORY_ITEM_FIELDS}
          }
        }
      }
      skills {
        skill { ${CORE_SKILL_FIELDS} }
        lvl
      }
      spells { ${CORE_SPELL_FIELDS} }
      perks { ${CORE_PERK_FIELDS} }
      race {
        id
        title
        attributes { ${ATTRIBUTES_FIELDS} }
      }
      class {
        id
        title
        attributes { ${ATTRIBUTES_FIELDS} }
      }
    }
  }
`;

export const GET_GENERATOR_DATA_QUERY = gql`
  query {
    races {
      id
      name
      description
      attributes {
        Strength
        Agility
        Constitution
        Perception
        Intelligence
        Spirit
        Charisma
      }
      skills {
        id
        name
        type
        description
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
    classes {
      id
      name
      description
      attributes {
        Strength
        Agility
        Constitution
        Perception
        Intelligence
        Spirit
        Charisma
      }
      skills {
        id
        name
        type
        description
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
    skills {
      id
      name
      type
      description
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
    skills {
      id
      name
      type
      description
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
    items {
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

export const CREATE_CHARACTER_MUTATION = gql`
  mutation CreateCharacterMutation(
    $userID: String!
    $name: String!
    $description: String
    $imgLink: String
    $lvl: Int!
    $coins: Int!
    $healthpoints: Int!
    $mainAttribute: String!
    $attributes: AttributesMutation
    $race: String!
    $class: String!
    $skills: [CharacterSkillMutation]
    $inventory: [InventoryItemMutation]
    $equipment: EquipmentMutation
  ) {
    addCharacter(
      userID: $userID
      name: $name
      description: $description
      imgLink: $imgLink
      lvl: $lvl
      coins: $coins
      healthpoints: $healthpoints
      mainAttribute: $mainAttribute
      attributes: $attributes
      race: $race
      class: $class
      skills: $skills
      inventory: $inventory
      equipment: $equipment
    ) {
      id
    }
  }
`;

export const UPDATE_CHARACTER_MUTATION = gql`
  mutation UpdateCharacterMutation(
    $id: ID!
    $name: String!
    $description: String
    $imgLink: String
    $lvl: Int!
    $coins: Int!
    $healthpoints: Int!
    $mainAttribute: String!
    $attributes: AttributesMutation
    $race: String!
    $class: String!
    $skills: [CharacterSkillMutation]
    $inventory: [InventoryItemMutation]
    $equipment: EquipmentMutation
  ) {
    updateCharacter(
      id: $id
      name: $name
      description: $description
      imgLink: $imgLink
      lvl: $lvl
      coins: $coins
      healthpoints: $healthpoints
      mainAttribute: $mainAttribute
      attributes: $attributes
      race: $race
      class: $class
      skills: $skills
      inventory: $inventory
      equipment: $equipment
    ) {
      id
    }
  }
`;
