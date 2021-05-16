const Class = require("../models/ClassModel");

exports.getClasses = async () => {
  try {
    const gClasses = await Class.find({}).populate("skills");
    return gClasses;
  } catch (err) {
    throw Error(err);
  }
};

exports.getClass = async ({ id }) => {
  try {
    const gClass = await Class.findOne({ _id: id }).populate("skills");
    return gClass;
  } catch (err) {
    throw Error(err);
  }
};

exports.saveClass = async (query) => {
  try {
    const newClass = await new Class(query).save();
    return newClass;
  } catch (err) {
    throw Error(err);
  }
};

exports.updateClass = async (query) => {
  try {
    const updatedClass = await Class.findOneAndUpdate({ _id: query.id }, query);
    return updatedClass;
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
