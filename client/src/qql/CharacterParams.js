import gql from "graphql-tag";
import {
  attributes,
  inventoryItem,
  perk,
  skill,
  spell,
} from "./QueryConstants";

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
      attributes { ${attributes} }
      inventory {
        id
        items {
          ${inventoryItem}
        }
        equip {
          weapon1{ ${inventoryItem} }
          weapon2{ ${inventoryItem} }
          weapon3{ ${inventoryItem} }
          weapon4{ ${inventoryItem} }
          armor{ ${inventoryItem} }
          helmet{ ${inventoryItem} }
          belt{ ${inventoryItem} }
          coat{ ${inventoryItem} }
          bag{ ${inventoryItem} }
          boots{ ${inventoryItem} }
          amulet{ ${inventoryItem} }
          rings{ ${inventoryItem} }
          pockets{ ${inventoryItem} }
        }
        storages {
          title
          items {
            ${inventoryItem}
          }
        }
      }
      skills {
        skill { ${skill} }
        lvl
      }
      spells { ${spell} }
      perks { ${perk} }
      race {
        id
        title
        attributes { ${attributes} }
      }
      class {
        id
        title
        attributes { ${attributes} }
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
