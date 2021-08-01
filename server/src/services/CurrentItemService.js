const CurrentItem = require("../models/CurrentItemModel");

exports.getCurrentItems = async () => {
  try {
    return await CurrentItem.find()
      .populate("item")
      .populate("quality")
      .populate("material")
      .populate("skills")
      .populate("spells")
      .populate("perks");
  } catch (err) {
    throw Error(err);
  }
};

exports.getCurrentItem = async ({ id }) => {
  try {
    return await CurrentItem.findOne({ _id: id })
      .populate("item")
      .populate("quality")
      .populate("material")
      .populate("skills")
      .populate("spells")
      .populate("perks");
  } catch (err) {
    throw Error(err);
  }
};

exports.saveCurrentItem = async (query) => {
  try {
    return await new CurrentItem(query).save();
  } catch (err) {
    throw Error(err);
  }
};

exports.updateCurrentItem = async (query) => {
  try {
    return await CurrentItem.findOneAndUpdate({ _id: query.id }, query);
  } catch (err) {
    throw Error(err);
  }
};

exports.deleteCurrentItem = async ({ id }) => {
  try {
    await CurrentItem.findOneAndDelete({ _id: id });
  } catch (err) {
    throw Error(err);
  }
};
