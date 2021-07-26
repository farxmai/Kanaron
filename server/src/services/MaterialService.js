const Material = require("../models/MaterialModel");

exports.getMaterials = async () => {
  try {
    return await Material.find({});
  } catch (err) {
    throw Error(err);
  }
};

exports.getMaterial = async ({ id }) => {
  try {
    return await Material.findOne({ _id: id });
  } catch (err) {
    throw Error(err);
  }
};

exports.saveMaterial = async (query) => {
  try {
    return await new Material(query).save();
  } catch (err) {
    throw Error(err);
  }
};

exports.updateMaterial = async (query) => {
  try {
    return await Material.findOneAndUpdate({ _id: query.id }, query);
  } catch (err) {
    throw Error(err);
  }
};

exports.deleteMaterial = async ({ id }) => {
  try {
    await Material.findOneAndDelete({ _id: id });
  } catch (err) {
    throw Error(err);
  }
};
