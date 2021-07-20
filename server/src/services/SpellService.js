const Spell = require("../models/SpellModel");

exports.getSpells = async () => {
  try {
    const Spells = await Spell.find({});
    return Spells;
  } catch (err) {
    throw Error(err);
  }
};

exports.getSpell = async ({ id }) => {
  try {
    const Spell = await Spell.findOne({ _id: id });
    return Spell;
  } catch (err) {
    throw Error(err);
  }
};

exports.saveSpell = async (query) => {
  try {
    const newSpell = await new Spell(query).save();
    return newSpell;
  } catch (err) {
    throw Error(err);
  }
};

exports.updateSpell = async (query) => {
  try {
    const updatedSpell = await Spell.findOneAndUpdate({ _id: query.id }, query);
    return updatedSpell;
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
