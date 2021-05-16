const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;

exports.createToken = ({ _id, login, permission }) => {
  const payload = { _id, login, permission };
  const token = jwt.sign(payload, secret);
  return token;
};
