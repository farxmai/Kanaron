const Material = require("../models/MaterialModel");

exports.getMaterials = async (query) => {
  try {
    const param = query ? query : {};
    const materials = await Material.find(param);
    return materials;
  } catch (err) {
    throw Error(err);
  }
};

exports.getMaterial = async ({ id }) => {
  try {
    const material = await Material.findOne({ _id: id });
    return material;
  } catch (err) {
    throw Error(err);
  }
};

exports.saveMaterial = async (query) => {
  try {
    const newMaterial = await new Material(query).save();
    return newMaterial;
  } catch (err) {
    throw Error(err);
  }
};

exports.updateMaterial = async (query) => {
  try {
    const updatedMaterial = await Material.findOneAndUpdate(
      { _id: query.id },
      query
    );
    return updatedMaterial;
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
