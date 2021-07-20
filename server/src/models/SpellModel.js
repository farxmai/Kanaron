const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SpellSchema = new Schema(
  {
    title: String,
    type: String,
    description: String,
    family: String, // enum или созданияе школ как отдельных сущностей
    effect: String,
    cost: { type: Schema.Types.Number, default: 0 }, // стоимость в манапоинтах
    cast: { type: Schema.Types.Number, default: 1 }, // скорость каста
    level: { type: Schema.Types.Number, default: 0 },
    concentration: { type: Schema.Types.Number, default: 0 },
    dice: { type: Schema.Types.Number, default: 20 }, // куб для броска
    diceCount: { type: Schema.Types.Number, default: 1 }, // количество кубов
  },
  { versionKey: false, timestamps: false }
);

const Spell = mongoose.model("Spell", SpellSchema);

module.exports = Spell;
