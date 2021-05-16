const Race = require("../models/RaceModel");

exports.getRaces = async () => {
  try {
    const races = await Race.find({}).populate("skills");
    return races;
  } catch (err) {
    throw Error(err);
  }
};

exports.getRace = async ({ id }) => {
  try {
    const race = await Race.findOne({ _id: id }).populate("skills");
    return race;
  } catch (err) {
    throw Error(err);
  }
};

exports.saveRace = async (query) => {
  try {
    const newRace = await new Race(query).save();
    return newRace;
  } catch (err) {
    throw Error(err);
  }
};

exports.updateRace = async (query) => {
  try {
    const updatedRace = await Race.findOneAndUpdate({ _id: query.id }, query);
    return updatedRace;
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
