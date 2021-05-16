const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SpellSchema = new Schema(
  {
    title: String,
    type: String, 
    description: String,
    family: String, // enum или созданияе школ как отдельных сущностей
    effect: String,
    cost: Number, // стоимость в манапоинтах
    cast: Number, // скорость каста
    level: Number,
    concentrarion: Number,    
    dice: Number, // куб для броска
    diceCount: Number,  // количество кубов
  },
  { versionKey: false, timestamps: false }
);

const Spell = mongoose.model("Spell", SpellSchema);

module.exports = Spell;
