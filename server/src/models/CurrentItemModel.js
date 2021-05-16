const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CurrentItemSchema = new Schema({
  item: { type: Schema.Types.ObjectId, ref: "Item" },
  material: { type: Schema.Types.ObjectId, ref: "Material" },
  quality: { type: Schema.Types.ObjectId, ref: "Quality" },  
}, { versionKey: false, timestamps: false }); 

const CurrentItem = mongoose.model("CurrentItem", CurrentItemSchema);

module.exports = CurrentItem;