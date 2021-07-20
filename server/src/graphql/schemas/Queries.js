module.exports = `
  type Query {
    races: [Race]!
    classes: [Class]!
    items: [Item]!
    skills: [Skill]!        
    race(id: String!): Race!
    class(id: String!): Class!  
    item(id: String!): Item! 
    skill(id: String!): Skill! 
    characters(userID: String!): [Character]!
    character(id: String!): Character!        
  }

  type Token {
    token: String
    message: String
  }

  type Character {
    id: String
    userID: String,
    name: String,
    description: String,
    imgLink: String,
    lvl: Int,
    healthpoints: Int,
    coins: Int,
    mainAttribute: String,
    attributes: Attributes,
    race: Race,
    class: Class,    
    inventory: [InventoryItem],
    equipment: Equipment,
    skills: [PersonalSkill],
  }
  
  type Race {
    id: String
    title: String
    imgLink: String
    look: String
    lifeSpan: Int
    description: String
    height: Int
    culture: String
    attributes: Attributes
    skills: [Skill]
  }
  type Class {
    id: String
    title: String
    imgLink: String
    description: String
    attributes: Attributes
    skills: [Skill]
  }
  type Attributes {
    Strength: Int
    Agility: Int
    Constitution: Int
    Perception: Int
    Intelligence: Int
    Spirit: Int
    Charisma: Int
  }
  type Skill {
    id: String
    name: String
    type: String
    description: String
    attributes: Attributes
  }   
  type PersonalSkill {
    skill:  Skill,
    skillLvl: Int,      
  }
  type Item {
    id: String
    name: String
    description: String
    type: String
    cost: Int
    material: String
    imgLink: String
    effects: String
    armor: Armor
    weapon: Weapon
    attributes: Attributes
  } 

  type InventoryItem {
    item:  Item,
    quantity: Int,
    quality: Int,
    known: Boolean,        
  }
  type Equipment {
    weapon1: InventoryItem,
    weapon2: InventoryItem,
    armor: InventoryItem,
    helmet: InventoryItem,
    necklace: InventoryItem,
    rings: [InventoryItem],
    accessories: [InventoryItem],
  }
  type Weapon {
    baseAttack: Int
    critAttack: Int
    critHit: [Int]
    damageDice: Int
    specialData: String
    recharge: Int
  }
  type Armor {
    type: String
    baseDefense: Int
    agilityCut: Int
    specialData: String
  } 
`