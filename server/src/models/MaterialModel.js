const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MaterialSchema = new Schema({
  title: String,
  description: String,
  type: {
    type: String,
    enum: ["metal", "cloth", "leather", "wood", "mineral", "organic", "other"],
  },
  index: Number,
});

const Material = mongoose.model("Material", MaterialSchema);

module.exports = Material;
