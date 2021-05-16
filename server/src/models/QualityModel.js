
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QualitySchema = new Schema({
  title: String,
  description: String, 
  qualityType: String,
  qualityIndex: Number,
  additionalProperties: Object
})

const Quality = mongoose.model("Quality", QualitySchema);

module.exports = Quality;