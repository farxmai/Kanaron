const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports = CharacterSkill = new Schema(
  {
    lvl: { type: Schema.Types.Number, default: 1 },
    skill: { type: Schema.Types.ObjectId, ref: "Skill" },
  },
  { _id: false }
);
