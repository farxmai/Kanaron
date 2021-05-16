const Item = require("../models/ItemModel");

exports.getItems = async (query) => {
  try {
    const param = query ? query : {};
    const items = await Item.find(param);
    return items;
  } catch (err) {
    throw Error(err);
  }
};

exports.getItem = async ({ id }) => {
  try {
    const item = await Item.findOne({ _id: id });
    return item;
  } catch (err) {
    throw Error(err);
  }
};

exports.saveItem = async (query) => {
  try {
    const newItem = await new Item(query).save();
    return newItem;
  } catch (err) {
    throw Error(err);
  }
};

exports.updateItem = async (query) => {
  try {
    const updatedItem = await Item.findOneAndUpdate({ _id: query.id }, query);
    return updatedItem;
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
