const Perk = require("../models/PerkModel");

exports.getPerks = async () => {
  try {
    return await Perk.find({}).populate("skills").populate("spells");
  } catch (err) {
    throw Error(err);
  }
};

exports.getPerk = async ({ id }) => {
  try {
    return await Perk.findOne({ _id: id })
      .populate("skills")
      .populate("spells");
  } catch (err) {
    throw Error(err);
  }
};

exports.savePerk = async (query) => {
  try {
    return await new Perk(query).save();
  } catch (err) {
    throw Error(err);
  }
};

exports.updatePerk = async (query) => {
  try {
    return await Perk.findOneAndUpdate({ _id: query.id }, query);
  } catch (err) {
    throw Error(err);
  }
};

exports.deletePerk = async ({ id }) => {
  try {
    return await Perk.findOneAndDelete({ _id: id });
  } catch (err) {
    throw Error(err);
  }
};
