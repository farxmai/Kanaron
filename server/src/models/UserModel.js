const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    login: { type: String, unique: true },
    password: { type: String, select: false },
    permission: { type: String, enum: ["master", "user"], default: "user" },
    characters: [{ type: Schema.Types.ObjectId, ref: "Character" }],
  },
  { versionKey: false, timestamps: false }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
