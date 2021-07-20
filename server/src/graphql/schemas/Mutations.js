exports.Mutations = `
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
}
`