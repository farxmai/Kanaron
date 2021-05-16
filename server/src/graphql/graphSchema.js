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
            name: String!,
            imgLink: String!,
            look: String!,
            lifeSpan: Int!,
            description: String!,
            height: Int!,
            culture: String!,
            attributes: AttributesMutation!
            skills: [String]
        ): Race!
        updateRace(
            id: ID!,
            name: String,
            imgLink: String,
            look: String,
            lifeSpan: Int,
            description: String,
            height: Int,
            culture: String,
            attributes: AttributesMutation,
            skills: [String]
        ): Race!
        removeRace(id: ID!): Race

        addClass(
            name: String!
            imgLink: String
            description: String!
            attributes: AttributesMutation!
            skills: [String]
        ): Class!
        updateClass(
            id: ID!,
            name: String
            imgLink: String
            description: String
            attributes: AttributesMutation
            skills: [String]
        ): Class!
        removeClass(id: ID!): Class!

        addItem(
            name: String!,
            description: String!,
            type: String!,
            cost: Int,
            material: String,
            effects: String,
            imgLink: String,
            armor: ArmorMutation,
            weapon: WeaponMutation,
            attributes: AttributesMutation,
        ) : Item!
        updateItem(
            id: ID!,
            name: String!,
            description: String!,
            type: String!,
            cost: Int,
            material: String,
            effects: String,
            imgLink: String,
            armor: ArmorMutation,
            weapon: WeaponMutation,
            attributes: AttributesMutation,
        ): Item!
        removeItem(id: ID!): Item!

        addSkill(
            name: String!,
            type: String!,
            description: String,
            attributes: AttributesMutation, 
        ) : Skill!
        updateSkill(
            id: ID!,
            name: String,
            type: String,
            description: String,
            attributes: AttributesMutation,
        ): Skill!
        removeSkill(id: ID!): Skill!

        addCharacter(
            userID: String!,
            name: String!,
            description: String,
            imgLink: String,
            lvl: Int!,
            healthpoints: Int!,
            coins: Int,
            mainAttribute: String!,
            race: String!,
            class: String!, 
            attributes: AttributesMutation,
            inventory: [InventoryItemMutation],
            equipment: EquipmentMutation,
            skills: [PersonalSkillMutation],
        ) : Character!
        updateCharacter(
            id: ID!,
            name: String,
            description: String,
            imgLink: String,
            lvl: Int,
            healthpoints: Int,
            coins: Int,
            mainAttribute: String,
            race: String!,
            class: String!, 
            attributes: AttributesMutation,
            inventory: [InventoryItemMutation],
            equipment: EquipmentMutation,
            skills: [PersonalSkillMutation],
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
        name: String
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
        name: String
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
`);
