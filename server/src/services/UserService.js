const User = require("../models/UserModel");
const Token = require("./TokenService");

exports.getUsers = async () => {
  try {
    const users = await User.find({});
    return users;
  } catch (err) {
    throw Error(err);
  }
};

exports.getUser = async ({ id }) => {
  try {
    const user = await User.findOne({ _id: id });
    return user;
  } catch (err) {
    throw Error(err);
  }
};

exports.saveUser = async (query) => {
  try {
    const newUser = await new User(query).save();
    return newUser;
  } catch (err) {
    throw Error(err);
  }
};

exports.updateUser = async (query) => {
  try {
    const updatedUser = await User.findOneAndUpdate({ _id: query.id }, query);
    return updatedUser;
  } catch (err) {
    throw Error(err);
  }
};

exports.createUser = async ({ login, passsword }) => {
  try {
    const user = await new User({ login, passsword }).save();
    if (user !== null) {
      const token = Token.createToken({
        _id: user._id,
        login: user.login,
        permission: user.permission,
      });
      return { token, message: "Vse Ok" };
    } else throw Error("Something went wrong");
  } catch (err) {
    throw Error(err);
  }
};

exports.getToken = async ({ login, passsword }) => {
  try {
    const user = await User.findOne({ login }).select("+password");
    if (user === null) throw Error("Incorrect Login");
    if (user.password !== passsword) throw Error("Incorrect Password");
    const token = Token.createToken({
      _id: user._id,
      login: user.login,
      permission: user.permission,
    });
    return { token, message: "Vse Ok" };
  } catch (err) {
    throw Error(err);
  }
};
