const mongoose = require("mongoose");
const Attributes = require("./AttributesModel");
const Schema = mongoose.Schema;

const RaceSchema = new Schema(
  {
    title: String,
    imgLink: String,
    look: String,
    description: String,
    culture: String,
    lifeSpan: Number,
    height: Number,
    size: Number,
    attributes: Attributes,
    skills: [{ type: Schema.Types.ObjectId, ref: "Skill" }],
    perks: [{ type: Schema.Types.ObjectId, ref: "Perks" }],
    spells: [{ type: Schema.Types.ObjectId, ref: "Spells" }],
  },
  { versionKey: false, timestamps: false }
);

const Race = mongoose.model("Race", RaceSchema);

module.exports = Race;
