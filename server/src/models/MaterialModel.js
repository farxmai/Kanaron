const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MaterialSchema = new Schema({
  title: String,
  description: String,
  type: String,
  index: Number,
  additionalProperties: Object,
});

const Material = mongoose.model("Material", MaterialSchema);

module.exports = Material;
