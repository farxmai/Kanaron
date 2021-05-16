
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MaterialSchema = new Schema({
  title: String,
  description: String, 
  materialType: String,
  qualityIndex: Number,
  additionalProperties: Object
})

const Material = mongoose.model("Material", MaterialSchema);

module.exports = Material;