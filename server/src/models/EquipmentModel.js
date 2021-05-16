const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EquipmentSchema = new Schema({
  ownerId: { type: Schema.Types.ObjectId, ref: "Character" },
  weapon1: { type: Schema.Types.ObjectId, ref: "CurrentItem" },
  weapon2: { type: Schema.Types.ObjectId, ref: "CurrentItem" },
  weapon3: { type: Schema.Types.ObjectId, ref: "CurrentItem" },
  weapon4: { type: Schema.Types.ObjectId, ref: "CurrentItem" },
  armor: { type: Schema.Types.ObjectId, ref: "CurrentItem" },
  helmet: { type: Schema.Types.ObjectId, ref: "CurrentItem" },
  belt: { type: Schema.Types.ObjectId, ref: "CurrentItem" },
  coat: { type: Schema.Types.ObjectId, ref: "CurrentItem" },
  bag: { type: Schema.Types.ObjectId, ref: "CurrentItem" },
  boots: { type: Schema.Types.ObjectId, ref: "CurrentItem" },
  rings: [{ type: Schema.Types.ObjectId, ref: "CurrentItem" }],
  amulet: { type: Schema.Types.ObjectId, ref: "CurrentItem" },
  pockets: [{ type: Schema.Types.ObjectId, ref: "CurrentItem" }],
}, { versionKey: false, timestamps: false });

const Equipment = mongoose.model("Equipment", EquipmentSchema);

module.exports = Equipment;


