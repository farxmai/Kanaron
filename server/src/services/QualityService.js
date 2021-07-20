const Quality = require("../models/QualityModel");

exports.getQualities = async (query) => {
  try {
    const param = query ? query : {};
    const qualities = await Quality.find(param);
    return qualities;
  } catch (err) {
    throw Error(err);
  }
};

exports.getQuality = async ({ id }) => {
  try {
    const quality = await Quality.findOne({ _id: id });
    return quality;
  } catch (err) {
    throw Error(err);
  }
};

exports.saveQuality = async (query) => {
  try {
    const newQuality = await new Quality(query).save();
    return newQuality;
  } catch (err) {
    throw Error(err);
  }
};

exports.updateQuality = async (query) => {
  try {
    const updatedQuality = await Quality.findOneAndUpdate(
      { _id: query.id },
      query
    );
    return updatedQuality;
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
