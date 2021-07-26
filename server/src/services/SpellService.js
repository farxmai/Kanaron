const Spell = require("../models/SpellModel");

exports.getSpells = async () => {
  try {
    return await Spell.find({});
  } catch (err) {
    throw Error(err);
  }
};

exports.getSpell = async ({ id }) => {
  try {
    return await Spell.findOne({ _id: id });
  } catch (err) {
    throw Error(err);
  }
};

exports.saveSpell = async (query) => {
  try {
    return await new Spell(query).save();
  } catch (err) {
    throw Error(err);
  }
};

exports.updateSpell = async (query) => {
  try {
    return await Spell.findOneAndUpdate({ _id: query.id }, query);
  } catch (err) {
    throw Error(err);
  }
};

exports.deleteSpell = async ({ id }) => {
  try {
    return await Spell.findOneAndDelete({ _id: id });
  } catch (err) {
    throw Error(err);
  }
};
