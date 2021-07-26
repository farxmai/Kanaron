const Skill = require("../models/SkillModel");

exports.getSkills = async () => {
  try {
    return await Skill.find({});
  } catch (err) {
    throw Error(err);
  }
};

exports.getSkill = async ({ id }) => {
  try {
    return await Skill.findOne({ _id: id });
  } catch (err) {
    throw Error(err);
  }
};

exports.saveSkill = async (query) => {
  try {
    return await new Skill(query).save();
  } catch (err) {
    throw Error(err);
  }
};

exports.updateSkill = async (query) => {
  try {
    return await Skill.findOneAndUpdate({ _id: query.id }, query);
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
