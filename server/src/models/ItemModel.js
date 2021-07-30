const mongoose = require("mongoose");
const Attributes = require("./AttributesModel");
const Schema = mongoose.Schema;

const Weapon = new Schema({
  itemType: { type: String, default: "Weapon" },
  type: {
    type: String,
    enum: [
      "long_sword",
      "short_sword",
      "dagger",
      "long_bow",
      "short_bow",
      "crossbow",
      "hammer",
      "spear",
      "cudgel",
      "axe",
      "other",
    ],
  },
  attackType: { type: String, enum: ["melee", "range", "throwing", "magic"] },
  damageType: {
    type: String,
    enum: [null, "stabbing", "crushing", "chopping", "magical", "mental", "stressful"],
    default: null,
  },
  additionalProperties: Object,
  baseAttack: Number,
  critAttack: Number,
  critHit: [Number],
  dice: Number, // куб для броска
  diceCount: Number, // количество кубов
  attackRange: Number,
  recharge: Number,
});

const Armor = new Schema({
  itemType: { type: String, default: "Armor" },
  type: {
    type: String,
    enum: ["armor", "helmet", "belt", "coat", "bag", "clothes", "boots", "other"],
  },
  additionalProperties: Object,
  baseDefense: Number,
});

const Accessor = new Schema({
  itemType: { type: String, default: "Accessor" },
  type: {
    type: String,
    enum: ["amulet", "ring", "talisman", "artefact", "other"],
  },
  additionalProperties: Object,
});

const Consumable = new Schema({
  itemType: { type: String, default: "Consumable" },
  type: { type: String, enum: ["potion", "food", "drink", "other"] },
  additionalProperties: Object,
  effect: String,
});

const Ammo = new Schema({
  itemType: { type: String, default: "Ammo" },
  baseAttack: Number,
  attackRange: Number,
  stackSize: Number,
  effect: String,
  damageType: {
    type: String,
    enum: ["stabbing", "crushing", "chopping", "magical", "mental", "stressful"],
  },
  effectType: {
    type: String,
    enum: [null, "bleed", "sharp", "penetrated", "aimed", "other"],
    default: null,
  },
});

const ItemSchema = new Schema(
  {
    title: String,
    description: String,
    effects: String,
    imgLink: String,
    weight: Number,
    cost: Number,
    type: {
      type: String,
      enum: [null, "armor", "weapon", "accessor", "consumable", "ammo"],
      default: null,
    },
    typeProperties: {
      type: Object,
      enum: [null, Armor, Weapon, Accessor, Consumable, Ammo],
      default: null,
    },
    hpBonus: { type: Number, default: 0 },
    mpBonus: { type: Number, default: 0 },
    skills: [{ type: Schema.Types.ObjectId, ref: "Skill" }],
    perks: [{ type: Schema.Types.ObjectId, ref: "Perk" }],
    spells: [{ type: Schema.Types.ObjectId, ref: "Spell" }],
    attributes: Attributes,
  },
  { versionKey: false, timestamps: false }
);

const Item = mongoose.model("Item", ItemSchema);

module.exports = Item;
