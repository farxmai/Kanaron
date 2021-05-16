const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SkillSchema = new Schema(
  {
    title: String,
    type: String,
    description: String,
    cost: Number,
    perks: [{ type: Schema.Types.ObjectId, ref: "Perks" }],
    spells: [{ type: Schema.Types.ObjectId, ref: "Spells" }],
  },
  { versionKey: false, timestamps: false }
);

const Skill = mongoose.model("Skill", SkillSchema);

module.exports = Skill;
