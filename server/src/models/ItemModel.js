const mongoose = require("mongoose");
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
      "wand",
      "staff",
      "other",
    ],
  },
  attackType: [{ type: String, enum: ["melee", "range", "throwing", "magic"] }],
  damageType: [
    {
      type: String,
      enum: ["stabbing", "crushing", "chopping", "magical", "mental", "stressful"],
    },
  ],
  baseAttack: Number, // бонус к атаке (1-2)
  critAttack: Number, // множитель крита (х2-х3)
  critHit: [Number], // значения для крита ([19, 20])
  dice: Number, // куб для броска на урон
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
  baseDefense: Number,
  quickSlots: Number,
});

const Accessor = new Schema({
  itemType: { type: String, default: "Accessor" },
  type: {
    type: String,
    enum: ["amulet", "ring", "earring", "talisman", "artefact", "other"],
  },
});

const Consumable = new Schema({
  itemType: { type: String, default: "Consumable" },
  type: { type: String, enum: ["potion", "food", "drink", "other"] },
  effect: String,
});

const Ammo = new Schema({
  itemType: { type: String, default: "Ammo" },
  baseAttack: Number,
  attackRange: Number,
  stackSize: Number,
  effect: String,
  damageType: [
    {
      type: String,
      enum: ["stabbing", "crushing", "chopping", "magical", "mental", "stressful"],
    },
  ],
  effectType: [
    {
      type: String,
      enum: ["bleed", "sharp", "penetrated", "aimed", "other"],
    },
  ],
});

const ItemSchema = new Schema(
  {
    title: String,
    imgLink: String,
    description: String,
    weight: Number,
    cost: Number,
    type: {
      type: String,
      enum: ["other", "armor", "weapon", "accessor", "consumable", "ammo"],
      default: null,
    },
    typeProperties: {
      type: Object,
      enum: [null, Armor, Weapon, Accessor, Consumable, Ammo],
      default: null,
    },
  },
  { versionKey: false, timestamps: false }
);

const Item = mongoose.model("Item", ItemSchema);

module.exports = Item;
