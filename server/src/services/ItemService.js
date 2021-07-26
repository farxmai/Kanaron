const Item = require("../models/ItemModel");

exports.getItems = async () => {
  try {
    return await Item.find({})
      .populate("skills")
      .populate("spells")
      .populate("perks");
  } catch (err) {
    throw Error(err);
  }
};

exports.getItem = async ({ id }) => {
  try {
    return await Item.findOne({ _id: id })
      .populate("skills")
      .populate("spells")
      .populate("perks");
  } catch (err) {
    throw Error(err);
  }
};

exports.saveItem = async (query) => {
  try {
    return await new Item({
      ...query,
      typeProperties: query.typeProperties[query.type],
    }).save();
  } catch (err) {
    throw Error(err);
  }
};

exports.updateItem = async (query) => {
  try {
    return await Item.findOneAndUpdate({ _id: query.id }, query);
  } catch (err) {
    throw Error(err);
  }
};

exports.deleteItem = async ({ id }) => {
  try {
    await Item.findOneAndDelete({ _id: id });
  } catch (err) {
    throw Error(err);
  }
};
