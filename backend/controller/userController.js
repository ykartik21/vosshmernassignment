const User = require("../models/userModel.js");
const genrateToken = require("../utils/genrateToken.js");

const registerUser = async (req, res) => {
  const { name, number, password } = req.body;
  const userExists = await User.findOne({ number });
  //if user exists
  if (userExists) {
    res.status(400);
    throw new Error("User already Exists");
  }
  const user = await User.create({
    name,
    number,
    password,
  });

  //if user created
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      number: user.number,
      token: genrateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Error Occured");
  }
};

const authUser = async (req, res) => {
  const { number, password } = req.body;
  const user = await User.findOne({ number });

  //if user exists and password correct
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      number: user.number,
      password: user.password,
      token: genrateToken(user._id),
    });
  }

  //if user doesnot exists
  else {
    res.status(400);
    throw new Error("Invalid Number or Password!");
  }
};

module.exports = { registerUser, authUser };
