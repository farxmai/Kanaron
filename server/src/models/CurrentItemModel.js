const mongoose = require("mongoose");
const Attributes = require("./AttributesModel");
const Schema = mongoose.Schema;

const CurrentItemSchema = new Schema(
  {
    title: String,
    item: { type: Schema.Types.ObjectId, ref: "Item" },
    material: { type: Schema.Types.ObjectId, ref: "Material" },
    quality: { type: Schema.Types.ObjectId, ref: "Quality" },
    hpBonus: { type: Number, default: 0 },
    mpBonus: { type: Number, default: 0 },
    skills: [{ type: Schema.Types.ObjectId, ref: "Skill" }],
    perks: [{ type: Schema.Types.ObjectId, ref: "Perk" }],
    spells: [{ type: Schema.Types.ObjectId, ref: "Spell" }],
    attributes: Attributes,
  },
  { versionKey: false, timestamps: false }
);

const CurrentItem = mongoose.model("CurrentItem", CurrentItemSchema);

module.exports = CurrentItem;
