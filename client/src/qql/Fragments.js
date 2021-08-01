// Здесь должна была использоваться система фрагментов прдоставленная Graphql,
// но оказалось гораздо проще просто записывать поля, поскольку тогда
// не приходится их привязывать к конкретным сущностям.

export const ATTRIBUTES_FIELDS = `
  Strength
  Agility
  Constitution
  Perception
  Intelligence
  Spirit
  Charisma
`;

export const MAIN_FIELDS = `
  id
  title
  description
`;

export const CORE_SKILL_FIELDS = `
  id
  title
  type
  cost
  description 
`;

export const CORE_SPELL_FIELDS = `
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

export const CORE_PERK_FIELDS = `    
  id
  title
  description
  attributes { ${ATTRIBUTES_FIELDS} }
  skills { ${MAIN_FIELDS} }
  spells { ${MAIN_FIELDS} }
`;

export const CORE_ITEM_FIELDS = `   
  id
  title
  description
  imgLink
  cost
  weight
  type
  typeProperties {
    __typename
    ... on Weapon {
      type
      attackType
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
      effect
      damageType
      effectType
    }
  }
`;

export const CORE_MATERIAL_FIELDS = `   
  id
  title
  description
  index
  type
`;

export const CORE_QUALITY_FIELDS = `   
  id
  title
  description
  index
  type
  color
`;

export const CORE_INVENTORY_ITEM_FIELDS = `   
  item {
    item { ${CORE_ITEM_FIELDS} }
    material { ${CORE_MATERIAL_FIELDS} }
    quality { ${CORE_QUALITY_FIELDS} }
  }
  known
  quantity
`;
