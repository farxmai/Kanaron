const CurrentItem = require("../models/CurrentItemModel");

exports.getCurrentItems = async (query) => {
  try {
    const param = query ? query : {};
    const items = await CurrentItem.find(param)
      .populate("item")
      .populate("quality")
      .populate("material");
    return items;
  } catch (err) {
    throw Error(err);
  }
};

exports.getCurrentItem = async ({ id }) => {
  try {
    const item = await CurrentItem.findOne({ _id: id })
      .populate("item")
      .populate("quality")
      .populate("material");
    return item;
  } catch (err) {
    throw Error(err);
  }
};

exports.saveCurrentItem = async (query) => {
  try {
    const newCurrentItem = await new CurrentItem(query).save();
    return newCurrentItem;
  } catch (err) {
    throw Error(err);
  }
};

exports.updateCurrentItem = async (query) => {
  try {
    const updatedCurrentItem = await CurrentItem.findOneAndUpdate(
      { _id: query.id },
      query
    );
    return updatedCurrentItem;
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
