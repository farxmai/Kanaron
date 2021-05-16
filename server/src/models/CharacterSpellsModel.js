const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CharacterSpellsSchema = new Schema({
  ownerId: { type: Schema.Types.ObjectId, ref: "Character" },
  spells: [{ type: Schema.Types.ObjectId, ref: "Spell" }],
});

const CharacterSpells = mongoose.model("CharacterSpells", CharacterSpellsSchema);

module.exports = CharacterSpells;