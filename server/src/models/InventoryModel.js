const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InventoryItem = new Schema({
  item: { type: Schema.Types.ObjectId, ref: "CurrentItem" },
  quantity: Number,
  known: Boolean,  
});

const InventorySchema = new Schema({
    ownerId: { type: Schema.Types.ObjectId, ref: "Character" },
    title: { type: String, default: "Character" },
    items: [InventoryItem]
  },
  { versionKey: false, timestamps: false }
);

const Inventory = mongoose.model("Inventory", InventorySchema);

module.exports = Inventory;
