const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Attributes = require("./AttributesModel");
const CharacterSkill = require("./CharacterSkillModel");
const Coins = require("./CoinsModel");

const CharacterSchema = new Schema(
  {
    userID: { type: Schema.Types.ObjectId, ref: "User" },
    name: String,
    description: String,
    imgLink: String,
    mainAttribute: String,
    attributes: Attributes,
    coins: Coins,
    lvl: { type: Schema.Types.Number, default: 1 },
    hp: { type: Schema.Types.Number, default: 1 },
    mp: { type: Schema.Types.Number, default: 1 },
    skills: [CharacterSkill],
    race: { type: Schema.Types.ObjectId, ref: "Race" },
    class: { type: Schema.Types.ObjectId, ref: "Class" },
    spells: [{ type: Schema.Types.ObjectId, ref: "Spell", default: [] }],
    perks: [{ type: Schema.Types.ObjectId, ref: "Perk", default: [] }],
    inventory: { type: Schema.Types.ObjectId, ref: "Inventory" },
  },
  { versionKey: false, timestamps: false }
);

const Character = mongoose.model("Character", CharacterSchema);

module.exports = Character;
