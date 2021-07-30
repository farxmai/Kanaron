const mongoose = require("mongoose");
const Attributes = require("./AttributesModel");
const Schema = mongoose.Schema;

const ClassSchema = new Schema(
  {
    title: String,
    imgLink: String,
    description: String,
    icon: String,
    hpDice: { type: Number, default: 6 },
    attributes: Attributes,
    skills: [{ type: Schema.Types.ObjectId, ref: "Skill" }],
    spells: [{ type: Schema.Types.ObjectId, ref: "Spell" }],
    perks: [{ type: Schema.Types.ObjectId, ref: "Perk" }],
  },
  { versionKey: false, timestamps: false }
);

const Class = mongoose.model("Class", ClassSchema);

module.exports = Class;
