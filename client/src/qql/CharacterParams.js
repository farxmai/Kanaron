import gql from "graphql-tag";

export const GET_USER_CHARACTERS_QUERY = gql`
  query GetUserCharactersQuery($id: String!) {
    characters(userID: $id) {
      id
      name
      lvl
      race {
        id
        name
      }
      class {
        id
        name
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
      coins
      healthpoints
      mainAttribute
      attributes {
        Strength
        Agility
        Constitution
        Perception
        Intelligence
        Spirit
        Charisma
      }
      race {
        id
        name
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
      class {
        id
        name
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
        skillLvl
        skill {
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
      inventory {
        quantity
        quality
        known
        item {
          id
          name
          description
          type
          cost
          material
          effects
          attributes {
            Strength
            Agility
            Constitution
            Perception
            Intelligence
            Spirit
            Charisma
          }
          armor {
            type
            baseDefense
            agilityCut
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
        }
      }
      equipment {
        weapon1 {
          quality
          known
          item {
            id
            name
            type
            material
            effects
            attributes {
              Strength
              Agility
              Constitution
              Perception
              Intelligence
              Spirit
              Charisma
            }
            weapon {
              baseAttack
              critAttack
              critHit
              damageDice
              specialData
              recharge
            }
          }
        }
        weapon2 {
          quality
          known
          item {
            id
            name
            type
            material
            effects
            attributes {
              Strength
              Agility
              Constitution
              Perception
              Intelligence
              Spirit
              Charisma
            }
            weapon {
              baseAttack
              critAttack
              critHit
              damageDice
              specialData
              recharge
            }
          }
        }
        armor {
          quality
          known
          item {
            id
            name
            type
            material
            effects
            attributes {
              Strength
              Agility
              Constitution
              Perception
              Intelligence
              Spirit
              Charisma
            }
            armor {
              type
              baseDefense
              agilityCut
              specialData
            }
          }
        }
        helmet {
          quality
          known
          item {
            id
            name
            type
            material
            effects
            attributes {
              Strength
              Agility
              Constitution
              Perception
              Intelligence
              Spirit
              Charisma
            }
            armor {
              type
              baseDefense
              agilityCut
              specialData
            }
          }
        }
        necklace {
          quality
          known
          item {
            id
            name
            description
            type
            cost
            material
            effects
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
        rings {
          quality
          known
          item {
            id
            name
            description
            type
            cost
            material
            effects
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
    $skills: [PersonalSkillMutation]
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
    $skills: [PersonalSkillMutation]
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
