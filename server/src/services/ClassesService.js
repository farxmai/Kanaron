const Class = require("../models/ClassModel");

exports.getClasses = async () => {
  try {
    return await Class.find({})
      .populate("skills")
      .populate("spells")
      .populate("perks");
  } catch (err) {
    throw Error(err);
  }
};

exports.getClass = async ({ id }) => {
  try {
    return await Class.findOne({ _id: id })
      .populate("skills")
      .populate("spells")
      .populate("perks");
  } catch (err) {
    throw Error(err);
  }
};

exports.saveClass = async (query) => {
  try {
    return await new Class(query).save();
  } catch (err) {
    throw Error(err);
  }
};

exports.updateClass = async (query) => {
  try {
    return await Class.findOneAndUpdate({ _id: query.id }, query);
  } catch (err) {
    throw Error(err);
  }
};

exports.deleteClass = async ({ id }) => {
  try {
    await Class.findOneAndDelete({ _id: id });
  } catch (err) {
    throw Error(err);
  }
};
