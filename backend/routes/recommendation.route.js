const express = require('express');
const router = express.Router();
const { getPreference, } = require('../controllers/recommendation.controller');
const { protect } = require('../middleware/authMiddleware');
//getPreference
router.route('/getPreference').get(protect,getPreference);
module.exports = router;
