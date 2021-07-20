const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InventoryItem = new Schema({
  item: { type: Schema.Types.ObjectId, ref: "CurrentItem" },
  quantity: Number,
  known: Boolean,
});

const Equipment = new Schema({
  weapon1: { type: InventoryItem, default: null },
  weapon2: { type: InventoryItem, default: null },
  weapon3: { type: InventoryItem, default: null },
  weapon4: { type: InventoryItem, default: null },
  armor: { type: InventoryItem, default: null },
  helmet: { type: InventoryItem, default: null },
  belt: { type: InventoryItem, default: null },
  coat: { type: InventoryItem, default: null },
  bag: { type: InventoryItem, default: null },
  boots: { type: InventoryItem, default: null },
  amulet: { type: InventoryItem, default: null },
  rings: [InventoryItem],
  pockets: [InventoryItem],
});

const Storage = new Schema({
  title: { type: String, default: "Storage" },
  items: [InventoryItem],
  open: { type: Boolean, default: true },
});

const InventorySchema = new Schema(
  {
    title: { type: String, default: "Character" },
    items: [InventoryItem],
    equip: Equipment,
    storages: [Storage],
  },
  { versionKey: false, timestamps: false }
);

const Inventory = mongoose.model("Inventory", InventorySchema);
module.exports = Inventory;
