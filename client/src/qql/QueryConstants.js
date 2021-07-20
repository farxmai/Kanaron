export const attributes = `
  Strength
  Agility
  Constitution
  Perception
  Intelligence
  Spirit
  Charisma
`;

export const skill = `
  id
  title
  type
  cost
  description 
`;

export const spell = `
  id
  title
  type 
  description
  family 
  effect
  cost 
  cast 
  level
  concentration    
  dice 
  diceCount
`;

export const perk = `
  id
  title
  description
  attributes { ${attributes} }
  skills { ${skill} }
  spells { ${spell} }
`;

export const inventoryItem = `
  item {
    item {
      id
      title
      description
      effects
      imgLink
      cost
      weight
      hpBonus
      mpBonus
      type
      typeProperties {
        ... on Weapon {
          type
          damageType
          baseAttack
          critAttack
          critHit
          dice
          diceCount
          attackRange
          recharge
        }
        ... on Armor {
          type
          baseDefense
        }
        ... on Armor {
          type
          baseDefense
        }
        ... on Accessor {
          type
        }
        ... on Consumable {
          type
          effect
        }
        ... on Ammo {
          baseAttack
          attackRange
          stackSize
          effectDescription
          damageType
          effectType
        }
      }
    }
    material {
      id
      title
      description
      index
      type
    }
    quality {
      id
      title
      description
      index
      type
    }
  }
  known
  quantity
`;
