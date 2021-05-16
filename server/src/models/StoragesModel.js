const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StoragesSchema = new Schema({
  ownerId: { type: Schema.Types.ObjectId, ref: "Character" },
  storages: [{ type: Schema.Types.ObjectId, ref: "Inventory" }],
});

const Storages = mongoose.model("Storages", StoragesSchema);

module.exports = Storages;