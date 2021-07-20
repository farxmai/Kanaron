const Perk = require("../models/PerkModel");

exports.getPerks = async () => {
  try {
    const Perks = await Perk.find({});
    return Perks;
  } catch (err) {
    throw Error(err);
  }
};

exports.getPerk = async ({ id }) => {
  try {
    const Perk = await Perk.findOne({ _id: id });
    return Perk;
  } catch (err) {
    throw Error(err);
  }
};

exports.savePerk = async (query) => {
  try {
    const newPerk = await new Perk(query).save();
    return newPerk;
  } catch (err) {
    throw Error(err);
  }
};

exports.updatePerk = async (query) => {
  try {
    const updatedPerk = await Perk.findOneAndUpdate({ _id: query.id }, query);
    return updatedPerk;
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
