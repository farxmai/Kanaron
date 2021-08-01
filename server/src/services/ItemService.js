const Item = require("../models/ItemModel");

exports.getItems = async () => {
  try {
    return await Item.find({});
  } catch (err) {
    throw Error(err);
  }
};

exports.getItem = async ({ id }) => {
  try {
    return await Item.findOne({ _id: id });
  } catch (err) {
    throw Error(err);
  }
};

exports.saveItem = async (query) => {
  try {
    console.log(query.type);
    return await new Item({
      ...query,
      typeProperties:
        query.type !== "other"
          ? {
              itemType: query.type[0].toUpperCase() + query.type.substring(1),
              ...query.typeProperties[query.type],
            }
          : null,
    }).save();
  } catch (err) {
    throw Error(err);
  }
};

exports.updateItem = async (query) => {
  try {
    return await Item.findOneAndUpdate(
      { _id: query.id },
      {
        ...query,
        typeProperties:
          query.type !== "other"
            ? {
                itemType: query.type[0].toUpperCase() + query.type.substring(1),
                ...query.typeProperties[query.type],
              }
            : null,
      }
    );
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
