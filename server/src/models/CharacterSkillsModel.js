const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PersonalSkill = new Schema({
  skillLvl: Number,
  skill: { type: Schema.Types.ObjectId, ref: "Skill" },
});

const CharacterSkillsSchema = new Schema({
  ownerId: { type: Schema.Types.ObjectId, ref: "Character" },
  skills: [PersonalSkill],
});

const CharacterSkills = mongoose.model("CharacterSkills", CharacterSkillsSchema);

module.exports = CharacterSkills;