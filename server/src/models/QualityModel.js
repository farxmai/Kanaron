const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QualitySchema = new Schema({
  title: String,
  description: String,
  type: String,
  index: Number,
  color: { type: String, default: "#919EAB" },
});

const Quality = mongoose.model("Quality", QualitySchema);

module.exports = Quality;
