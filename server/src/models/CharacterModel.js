const mongoose = require("mongoose");
const Attributes = require("./AttributesModel");
const Schema = mongoose.Schema;

const CharacterSchema = new Schema(
  {
    userID: { type: Schema.Types.ObjectId, ref: "User" },
    name: String,
    description: String,
    imgLink: String,    
    mainAttribute: String,
    lvl: Number,
    hp: Number,
    mp: Number,
    attributes: Attributes,
    pet: { type: Schema.Types.ObjectId, ref: "Pet" },   
    skills: { type: Schema.Types.ObjectId, ref: "CharacterSkills" },
    spels: { type: Schema.Types.ObjectId, ref: "CharacterSpells" },
    perks: { type: Schema.Types.ObjectId, ref: "CharacterPerks" },    
    race: { type: Schema.Types.ObjectId, ref: "Race" },
    class: { type: Schema.Types.ObjectId, ref: "Class" },   
    coins:  { type: Schema.Types.ObjectId, ref: "Coins" }, 
    inventory: { type: Schema.Types.ObjectId, ref: "Inventory" },
    equipment:  { type: Schema.Types.ObjectId, ref: "Equipment" },
    storages: { type: Schema.Types.ObjectId, ref: "Storages" },
  },
  { versionKey: false, timestamps: false }
);

const Character = mongoose.model("Character", CharacterSchema);

module.exports = Character;
