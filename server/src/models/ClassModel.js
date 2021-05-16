const mongoose = require("mongoose");
const Attributes = require("./AttributesModel");
const Schema = mongoose.Schema;

const ClassSchema = new Schema(
  {
    title: String,
    imgLink: String,
    description: String,
    attributes: Attributes,
    skills: [{ type: Schema.Types.ObjectId, ref: "Skill" }],
    perks: [{ type: Schema.Types.ObjectId, ref: "Perks" }],
    spells: [{ type: Schema.Types.ObjectId, ref: "Spells" }],
  },
  { versionKey: false, timestamps: false }
);

const Class = mongoose.model("Class", ClassSchema);

module.exports = Class;
