const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SkillSchema = new Schema(
  {
    title: String,
    type: String,
    description: String,
    cost: { type: Schema.Types.Number, default: 0 },
  },
  { versionKey: false, timestamps: false }
);

const Skill = mongoose.model("Skill", SkillSchema);

module.exports = Skill;
