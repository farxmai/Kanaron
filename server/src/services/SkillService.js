const Skill = require("../models/SkillModel");

exports.getSkills = async () => {
  try {
    const skills = await Skill.find({});
    return skills;
  } catch (err) {
    throw Error(err);
  }
};

exports.getSkill = async ({ id }) => {
  try {
    const skill = await Skill.findOne({ _id: id });
    return skill;
  } catch (err) {
    throw Error(err);
  }
};

exports.saveSkill = async (query) => {
  try {
    const newSkill = await new Skill(query).save();
    return newSkill;
  } catch (err) {
    throw Error(err);
  }
};

exports.updateSkill = async (query) => {
  try {
    const updatedSkill = await Skill.findOneAndUpdate({ _id: query.id }, query);
    return updatedSkill;
  } catch (err) {
    throw Error(err);
  }
};

exports.deleteSkill = async ({ id }) => {
  try {
    return await Skill.findOneAndDelete({ _id: id });
  } catch (err) {
    throw Error(err);
  }
};
