const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports = Coins = new Schema({  
  plat: { type: Number, default: 0 },
  gold: { type: Number, default: 0 },
  silv: { type: Number, default: 0 },
  copr: { type: Number, default: 0 },
  iron: { type: Number, default: 0 },
});

const Coins = mongoose.model("Coins", CoinsSchema);

module.exports = Coins;