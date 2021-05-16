const Character = require("../models/CharacterModel");
const Skill = require("../models/SkillModel");
const Item = require("../models/ItemModel");

exports.getCharacters = async ({ userID }) => {
  try {
    const characters = await Character.find(userID ? { userID } : {})
      .populate("race")
      .populate("class")
      .populate({ path: "skills.skill", model: Skill })
      .populate({ path: "inventory.item", model: Item });
    return characters;
  } catch (err) {
    throw Error(err);
  }
};

exports.getCharacter = async ({ id }) => {
  try {
    const character = await Character.findOne({ _id: id })
      .populate("race")
      .populate("class")
      .populate("race.skills")
      .populate("class.skills")
      .populate({ path: "skills.skill", model: Skill })
      .populate({ path: "inventory.item", model: Item })
      .populate({ path: "equipment.weapon1.item", model: Item })
      .populate({ path: "equipment.weapon2.item", model: Item })
      .populate({ path: "equipment.armor.item", model: Item })
      .populate({ path: "equipment.helmet.item", model: Item })
      .populate({ path: "equipment.necklace.item", model: Item })
      .populate({ path: "equipment.rings.item", model: Item })
      .populate({ path: "equipment.accessories.item", model: Item });
    return character;
  } catch (err) {
    throw Error(err);
  }
};

exports.saveCharacter = async (query) => {
  try {
    const character = await new Character(query).save();
    return character;
  } catch (err) {
    throw Error(err);
  }
};

exports.updateCharacter = async (query) => {
  try {
    const character = await Character.findOneAndUpdate(
      { _id: query.id },
      query
    );
    return character;
  } catch (err) {
    throw Error(err);
  }
};

exports.deleteCharacter = async ({ id }) => {
  try {
    await Character.findOneAndDelete({ _id: id });
  } catch (err) {
    throw Error(err);
  }
};
