const express = require('express');
const router = express.Router();
const {
  register,
  login,
  getUser,
  updatePreference,
<<<<<<< HEAD
  forgotPassword,
  updatePasswordEmail,
  
=======
  updateProfile,
>>>>>>> 197bcb1fe39d9e0e17c05e8d95be4e7347ca90a6
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
<<<<<<< HEAD

//forgot
//public
 router.route('/forgot').post(forgotPassword);
 //update password
 router.post("/forgotPassword/:id/:token", updatePasswordEmail);




=======
//updateProfile
//private
router.route('/updateProfile/:id').put(protect, updateProfile);


>>>>>>> 197bcb1fe39d9e0e17c05e8d95be4e7347ca90a6
module.exports = router;
