const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CharacterPerksSchema = new Schema({
  ownerId: { type: Schema.Types.ObjectId, ref: "Character" },
  perks: [{ type: Schema.Types.ObjectId, ref: "Perk" }],
});

const CharacterPerks = mongoose.model("CharacterPerks", CharacterPerksSchema);

module.exports = CharacterPerks;