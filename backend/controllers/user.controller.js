const User = require('../models/user.model');
const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');

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
  const { _id, name, email, gender, productPreference } = await User.findById(
    req.user.id
  );

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
  const { summer, winter, casual, traditional, sportswear, formal } = req.body;
  const update = await User.findByIdAndUpdate(req.user.id, req.body, {
    new: true,
  });
  res.status(200).json(update);
});
//forgot password
//public
const forgotPassword = asyncHandler(async (req, res) => {
  const { email } = req.body;
  try {
    //Check user exist
    if (email) {
      const user = await User.findOne({ email: email });
      if (user) {
        //generate token
        const secret = process.env.JWT_SECRET + user._id;
        const token = jwt.sign({ userID: user._id }, secret, {
          expiresIn: '10m',
        });
        const link = `http://localhost:3000/user/reset/${user._id}/${token}`;
        // email sending
        const transport = nodemailer.createTransport({
          service: 'gmail',
          host: 'smtp.gmail.com',
          port: 465,
          auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD,
          },
        });
        const data = {
          from: process.env.EMAIL,
          to: email,
          subject: 'Reset Account Password Link',
          html: `
        <h3>Please click the linkbelow to reset your password</h3>
        <p>${link}</p>`,
        };
        transport.sendMail(data, (error, body) => {
          if (error) {
            res.status(400);
            throw new Error('Reset password link error');
          }
          return res
            .status(200)
            .json({
              message: 'Email has been sent. Please follow the instructions.',
            });
        });
      } else {
        res.status(400);
        throw new Error('User does not exist');
      }
    } else {
      res.status(400);
      throw new Error('Email is required');
    }
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});
//updatePasswordEmail
const updatePasswordEmail = asyncHandler(async (req, res) => {
  const { newPassword, confirmPassword } = req.body;
  const { id, token } = req.params;
  try {
    if (newPassword && confirmPassword && id && token) {
      if (newPassword === confirmPassword) {
        //verify token
        const user = await User.findById(req.user.id);
        const secret = process.env.JWT_SECRET + user._id;
        const isValid = jwt.verify(token, secret);
        if (isValid) {
          //Hash Password
          const salt = await bcrypt.genSalt(10);
          const hash = await bcrypt.hash(newPassword, salt);
          const isUpdate = await User.findByIdAndUpdate(user._id, {
            $set: {
              password: hash,
            },
          });

          if (isUpdate) {
            return res.status(200).json(user);
          }
        }
        else{
          return res.status(400).json({
            message: "Link has been Expired",
          });
        }

      }
      else{
        return res
            .status(400)
            .json({ message: "password and confirm password does not match" });
      }
    }
    else{
      return res.status(400).json({ message: "All fields are required" });
    }
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

//generate a token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '2d',
  });
};

module.exports = {
  register,
  login,
  getUser,
  updatePreference,
  forgotPassword,
  updatePasswordEmail,
};
