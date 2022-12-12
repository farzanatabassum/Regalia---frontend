const express = require('express');
const router = express.Router();
const {
  register,
  login,
  getUser,
  updatePreference,
  forgotPassword,
  updatePasswordEmail,
  updateProfile,
} = require('../controllers/user.controller');
const { protect } = require('../middleware/authMiddleware');
//signup
//public
router.route('/signup').post(register);
//login
//public
router.route('/login').post(login);
//getUser
//private
router.route('/me').get(protect, getUser);
//updatePreference
//private
router.route('/updatePreference/:id').put(protect, updatePreference);
//forgot
//public
router.route('/forgot').post(forgotPassword);
//update password
router.post('/forgotPassword/:id/:token', updatePasswordEmail);
//updateProfile
//private
router.route('/updateProfile/:id').put(protect, updateProfile);

module.exports = router;
