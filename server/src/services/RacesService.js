const Race = require("../models/RaceModel");

exports.getRaces = async () => {
  try {
    return await Race.find({})
      .populate("skills")
      .populate("spells")
      .populate("perks");
  } catch (err) {
    throw Error(err);
  }
};

exports.getRace = async ({ id }) => {
  try {
    return await Race.findOne({ _id: id })
      .populate("skills")
      .populate("spells")
      .populate("perks");
  } catch (err) {
    throw Error(err);
  }
};

exports.saveRace = async (query) => {
  try {
    return await new Race(query).save();
  } catch (err) {
    throw Error(err);
  }
};

exports.updateRace = async (query) => {
  try {
    return await Race.findOneAndUpdate({ _id: query.id }, query);
  } catch (err) {
    throw Error(err);
  }
};

exports.deleteRace = async ({ id }) => {
  try {
    return await Race.findOneAndDelete({ _id: id });
  } catch (err) {
    throw Error(err);
  }
};
