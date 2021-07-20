var { buildSchema } = require("graphql");

module.exports = buildSchema(`
    input AttributesMutation {
        Strength: Int
        Agility: Int
        Constitution: Int
        Perception: Int
        Intelligence: Int
        Spirit: Int
        Charisma: Int
    }

    input CoinsMutation {
        plat: Int
        gold: Int
        silv: Int
        copr: Int
        iron: Int
    }

    input InventoryItemMutation {
        item:  String!
        quantity: Int
        known: Boolean    
    } 

    input WeaponMutation {
        type: String
        damageType: String
        baseAttack: Int
        critAttack: Int
        critHit: [Int]
        dice: Int
        diceCount: Int
        attackRange: Int
        recharge: Int
    } 

    input ArmorMutation {
        type: String
        baseDefense: Int
    } 

    input AccessorMutation {
        type: String
    } 

    input ConsumableMutation {
        type: String
        effect: String
    } 

    input AmmoMutation {
        baseAttack: Int
        attackRange: Int
        stackSize: Int
        effectDescription: String
        damageType: String
        effectType: String
    }

    input CharacterSkillMutation {
        skill:  String!,
        lvl: Int,      
    }   

    input TypePropertiesMutation {
        weapon: WeaponMutation
        armor: ArmorMutation
        accessor: AccessorMutation
        consumable: ConsumableMutation
        ammo: AmmoMutation
    }
   
    input InventoryMutation {
        id: String
        items: [InventoryItemMutation]
        equip: EquipmentMutation
        storages: [StorageMutation]
    }

    input StorageMutation {
        title: String
        items: [InventoryItemMutation]
        open: Boolean
    }

    input EquipmentMutation {
        weapon1: InventoryItemMutation
        weapon2: InventoryItemMutation
        weapon3: InventoryItemMutation
        weapon4: InventoryItemMutation
        armor: InventoryItemMutation
        helmet: InventoryItemMutation
        belt: InventoryItemMutation
        coat: InventoryItemMutation
        bag: InventoryItemMutation
        boots: InventoryItemMutation
        amulet: InventoryItemMutation
        rings: [InventoryItemMutation]
        pockets: [InventoryItemMutation]
    }

    type Query {
        races: [Race]!
        classes: [Class]!
        items: [Item]!
        materials: [Material]!
        qualities: [Quality]!
        currentItems: [CurrentItem]!
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

    type Mutation {

        signup(
            login: String!,
            password: String!
        ) : Token
        login(
            login: String!,
            password: String!
        ) : Token

        addRace(
            title: String!
            imgLink: String!
            description: String!
            look: String!
            culture: String!
            lifeSpan: Int!
            height: Int!
            size: Int!
            attributes: AttributesMutation!
            skills: [String]
            perks: [String]
            spells: [String]
        ): Race!
        updateRace(
            id: ID!
            title: String
            imgLink: String
            description: String
            look: String
            culture: String
            lifeSpan: Int
            height: Int
            size: Int
            attributes: AttributesMutation
            skills: [String]
            perks: [String]
            spells: [String]
        ): Race!
        removeRace(id: ID!): Race

        addClass(
            title: String!
            imgLink: String
            description: String!
            attributes: AttributesMutation!
            skills: [String]
            perks: [String]
            spells: [String]
        ): Class!
        updateClass(
            id: ID!,
            title: String
            imgLink: String
            description: String
            attributes: AttributesMutation
            skills: [String]
            perks: [String]
            spells: [String]
        ): Class!
        removeClass(id: ID!): Class!

        addMaterial(
            title: String
            description: String
            type: String
            index: Int
        ) : Material!
        updateMaterial(
            id: String
            title: String
            description: String
            type: String
            index: Int
        ): Material!
        removeMaterial(id: ID!): Material!

        addQuality(
            title: String
            description: String
            type: String
            index: Int
        ) : Quality!
        updateQuality(
            id: String
            title: String
            description: String
            type: String
            index: Int
        ): Quality!
        removeQuality(id: ID!): Quality!

        addItem(
            title: String
            description: String
            effects: String
            imgLink: String
            cost: Int
            weight: Int
            type: String
            typeProperties: TypePropertiesMutation
            hpBonus: Int
            mpBonus: Int
            skills: [String]
            perks: [String]
            spells: [String]
            attributes: AttributesMutation
        ) : Item!
        updateItem(
            id: String
            title: String
            description: String
            effects: String
            imgLink: String
            cost: Int
            weight: Int
            type: String
            typeProperties: TypePropertiesMutation
            hpBonus: Int
            mpBonus: Int
            skills: [String]
            spells: [String]
            perks: [String]
            attributes: AttributesMutation
        ): Item!
        removeItem(id: ID!): Item!

        addCurrentItem(
            item: String
            material: String
            quality: String
        ) : CurrentItem!
        updateCurrentItem(
            id: String
            item: String
            material: String
            quality: String
        ): CurrentItem!
        removeCurrentItem(id: ID!): CurrentItem!
        

        addSkill(
            title: String!
            type: String!
            cost: Int
            description: String
        ) : Skill!
        updateSkill(
            id: ID!,
            title: String!
            type: String!
            cost: Int
            description: String
        ): Skill!
        removeSkill(id: ID!): Skill!

        addSpell(
            title: String!
            type: String
            description: String
            family: String 
            effect: String
            cost: Int! 
            cast: Int 
            level: Int
            concentration: Int    
            dice: Int 
            diceCount: Int
        ) : Spell!
        updateSpell(
            id: ID!,
            title: String!
            type: String
            description: String
            family: String 
            effect: String
            cost: Int! 
            cast: Int 
            level: Int
            concentration: Int    
            dice: Int 
            diceCount: Int
        ): Spell!
        removeSpell(id: ID!): Spell!

        addPerk(
            title: String!
            description: String
            attributes: AttributesMutation
            skills: [String]
            spells: [String]
        ) : Perk!
        updatePerk(
            id: ID!,
            title: String!
            description: String
            attributes: AttributesMutation
            skills: [String]
            spells: [String]
        ): Perk!
        removePerk(id: ID!): Perk!

        addCharacter(
            userID: String!
            name: String!
            description: String
            imgLink: String
            lvl: Int
            hp: Int
            mp: Int
            coins: CoinsMutation
            mainAttribute: String!
            race: String!
            class: String! 
            attributes: AttributesMutation
            inventory: InventoryMutation
            skills: [CharacterSkillMutation]
        ) : Character!
        updateCharacter(
            id: ID!
            name: String
            description: String
            imgLink: String
            lvl: Int
            hp: Int
            mp: Int
            coins: CoinsMutation
            mainAttribute: String
            race: String
            class: String 
            attributes: AttributesMutation
            inventory: InventoryMutation
            skills: [CharacterSkillMutation]
            perks: [String]
            spells: [String]
        ): Character!
        removeCharacter(id: ID!): Character!

    }
    
    type Character {
        id: String
        userID: String,
        name: String,
        description: String,
        imgLink: String,
        lvl: Int,
        hp: Int,
		mp: Int,
        coins: Coins,
        attributes: Attributes,
        mainAttribute: String,
        race: Race,
        class: Class,
		skills: [CharacterSkill]
        spells: [Spell]
        perks: [Perk]
        inventory: Inventory
    }

    type Coins {
        plat: Int,
        gold: Int,
        silv: Int,
        copr: Int,
        iron: Int
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
        title: String
        type: String
        cost: Int
        description: String
        attributes: Attributes
        perks: [Perk]
        spells: [Spell]
    }

    type Spell {
        id: String
        title: String
        type: String 
        description: String
        family: String 
        effect: String
        cost: Int 
        cast: Int 
        level: Int
        concentration: Int    
        dice: Int 
        diceCount: Int
    }

    type Perk {
        id: String
        title: String
        description: String
        attributes: Attributes
        skills: [Skill]
        spells: [Spell]
    }

    type CharacterSkill {
        skill: Skill,
        lvl: Int,      
    }

    type Inventory {
        id: String
        title: String
        items: [InventoryItem]
        equip: Equipment
        storages: [Storage]
    }

    type Storage {
        title: String
        items: [InventoryItem]
        open: Boolean
    }

    type Equipment {
        weapon1: InventoryItem
        weapon2: InventoryItem
        weapon3: InventoryItem
        weapon4: InventoryItem
        armor: InventoryItem
        helmet: InventoryItem
        belt: InventoryItem
        coat: InventoryItem
        bag: InventoryItem
        boots: InventoryItem
        amulet: InventoryItem
        rings: [InventoryItem]
        pockets: [InventoryItem]
    }

    type InventoryItem {
        id: String
        item:  CurrentItem,
        quantity: Int,
        known: Boolean,        
    }

    type CurrentItem {
        id: String
        item: Item
        material: Material
        quality: Quality
    }

    type Material {
        id: String
        title: String
        description: String
        materialType: String
        materialIndex: Int
    }

    type Quality {
        id: String
        title: String
        description: String
        qualityType: String
        qualityIndex: Int
    }

    union TypeProperties = Weapon | Armor | Accessor | Consumable | Ammo

    type Item {
        id: String
        title: String
        description: String
        effects: String
        imgLink: String
        cost: Int
        weight: Int
        type: String
        typeProperties: TypeProperties
        hpBonus: Int
        mpBonus: Int
        skills: [Skill]
        spells: [Spell]
        perks: [Perk]
        attributes: Attributes
    } 

    type Weapon {
        type: String
        damageType: String
        baseAttack: Int
        critAttack: Int
        critHit: [Int]
        dice: Int
        diceCount: Int
        attackRange: Int
        recharge: Int
    } 

    type Armor {
        type: String
        baseDefense: Int
    } 

    type Accessor {
        type: String
    } 

    type Consumable {
        type: String
        effect: String
    } 

    type Ammo {
        baseAttack: Int
        attackRange: Int
        stackSize: Int
        effectDescription: String
        damageType: String
        effectType: String
    }
        
  
  
`);
