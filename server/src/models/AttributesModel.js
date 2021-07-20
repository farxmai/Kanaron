const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports = Attributes = new Schema(
  {
    Strength: { type: Number, default: 0 },
    Agility: { type: Number, default: 0 },
    Constitution: { type: Number, default: 0 },
    Perception: { type: Number, default: 0 },
    Intelligence: { type: Number, default: 0 },
    Spirit: { type: Number, default: 0 },
    Charisma: { type: Number, default: 0 },
  },
  { _id: false }
);
