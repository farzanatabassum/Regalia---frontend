const User = require('../models/user.model');
const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

//api/users/signup
//post req
//public
const register = asyncHandler(async (req, res) => {
  // const {name,email,gender,password}=req.body
  const { name, email, gender, password } = req.body;
  //if password less than 7
  if (password.length < 7) {
    res.status(400);
    throw new Error('Password must be at least 7 characters long');
  }
  //Any Input field is empty
  if (!name || !email || !gender || !password) {
    res.status(400);
    throw new Error('Please add all fields');
  }
  //User exist
  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(400);
    throw new Error('User already exist');
  }
  //Hash Password
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  //Create User
  const user = await User.create({
    name,
    email,
    gender,
    password: hash,
  });
  if (user) {
    res.status(200).json({
      id: user._id,
      name: user.name,
      email: user.email,
      gender: user.gender,
      // summer: user.productPreference.summer,
      // winter: user.productPreference.winter,
      // casual: user.productPreference.casual,
      // traditional: user.productPreference.traditional,
      // formal: user.productPreference.formal,
      // sportsWear: user.productPreference.sportsWear,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});
//api/users/login
//post req
//public
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  //Input field is empty
  if (!email || !password) {
    res.status(400);
    throw new Error('Please add all fields');
  }
  //Check user exist
  const user = await User.findOne({ email });
  //Match password
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});
//api/users/me
//get request
//private
const getUser = asyncHandler(async (req, res) => {
  const { _id, name, email, gender,  productPreference } =
    await User.findById(req.user.id);

  res.status(200).json({
    id: _id,
    name,
    email,
    gender,
    productPreference,
    
  });
});

//api/users/updatePreference/:id
//put request
//private
const updatePreference = asyncHandler(async (req, res) => {
  //Check user exist
  const user = await User.findById(req.user.id);
  const data = {
    summer: true || user.productPreference.summer,
    winter: true || user.productPreference.winter,
    casual: true || user.productPreference.casual,
    traditional: true || user.productPreference.traditional,
    sportswear: true || user.productPreference.sportswear,
    formal: true || user.productPreference.formal,
  };
  // const {summer, winter, casual, traditional, sportswear, formal } =req.body;
  const update = await User.findByIdAndUpdate(req.user.id, data, {
    new: true,
  });
  res.status(200).json(update);
});

const updateProfile = asyncHandler(async (req, res) => {
  //Check user exist
  const user = await User.findById(req.user.id);
  const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, salt);
    return password;
  };
  if (user) {
    user.name = req.body.name || user.name;
    if (req.body.password) {
      user.password = await hashPassword(req.body.password);
    }
    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      token: generateToken(updatedUser._id),
    });
  } else {
    res.status(404);
    throw new Error('User Not Found');
  }
});

//generate a token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '2d',
  });
};

module.exports = { register, login, getUser, updatePreference, updateProfile };
