exports.Inputs = `
  input AttributesMutation {
    Strength: Int
    Agility: Int
    Constitution: Int
    Perception: Int
    Intelligence: Int
    Spirit: Int
    Charisma: Int
  }
  input ArmorMutation {
    baseDefense: Int,
    agilityCut: Int,
    type: String,
    specialData: String,
  }
  input WeaponMutation {
    baseAttack: Int,
    critAttack: Int,
    critHit: [Int],
    damageDice: Int,
    specialData: String,
    recharge: Int,
  }   
  input PersonalSkillMutation {
    skill:  String!,
    skillLvl: Int,      
  }    
  input InventoryItemMutation {
    item:  String!,
    quantity: Int,
    quality: Int,
    known: Boolean,        
  } 
  input EquipmentMutation {
    weapon1: InventoryItemMutation,
    weapon2: InventoryItemMutation,
    armor: InventoryItemMutation,
    helmet: InventoryItemMutation,
    necklace: InventoryItemMutation,
    rings: [InventoryItemMutation],
    accessories: [InventoryItemMutation],
  }
`