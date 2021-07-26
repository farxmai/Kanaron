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

export const itemType = `
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
  attributes { ${attributes} }
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
  perks { 
    id
    title
    description 
  }
  typeProperties {
    __typename
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
`;

export const material = `
  id
  title
  description
  index
  type
`;

export const quality = `
  id
  title
  description
  index
  type
`;

export const inventoryItem = `
  item {
    item { ${itemType} }
    material { ${material} }
    quality { ${quality} }
  }
  known
  quantity
`;
