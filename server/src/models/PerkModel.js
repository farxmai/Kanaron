const mongoose = require("mongoose");
const Attributes = require("./AttributesModel");
const Schema = mongoose.Schema;

const PerkSchema = new Schema(
  {
    title: String,
    description: String,
    attributes: Attributes,
    skills: [{ type: Schema.Types.ObjectId, ref: "Skill" }],
    spells: [{ type: Schema.Types.ObjectId, ref: "Spell" }],
  },
  { versionKey: false, timestamps: false }
);

const Perk = mongoose.model("Perk", PerkSchema);

module.exports = Perk;
