const Quality = require("../models/QualityModel");

exports.getQualities = async () => {
  try {
    return await Quality.find({});
  } catch (err) {
    throw Error(err);
  }
};

exports.getQuality = async ({ id }) => {
  try {
    return await Quality.findOne({ _id: id });
  } catch (err) {
    throw Error(err);
  }
};

exports.saveQuality = async (query) => {
  try {
    return await new Quality(query).save();
  } catch (err) {
    throw Error(err);
  }
};

exports.updateQuality = async (query) => {
  try {
    return await Quality.findOneAndUpdate({ _id: query.id }, query);
  } catch (err) {
    throw Error(err);
  }
};

exports.deleteQuality = async ({ id }) => {
  try {
    await Quality.findOneAndDelete({ _id: id });
  } catch (err) {
    throw Error(err);
  }
};
