const User = require('../models/user.model');
const Product = require('../models/product.model');
const asyncHandler = require('express-async-handler');
const preferenceTags = require('../helper/preferenceTags');
const mongoose = require('mongoose');
const { summer, winter, casual, traditional, formal, sportsWear } =
  preferenceTags;
//api/recommendations/getPreference
//get
//private
const getPreference = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);
  const productTag = [];
  if (user.productPreference.summer === true) {
    productTag.push(...summer);
  }
  if (user.productPreference.winter === true) {
    productTag.push(...winter);
  }
  if (user.productPreference.casual === true) {
    productTag.push(...casual);
  }
  if (user.productPreference.formal === true) {
    productTag.push(...formal);
  }
  if (user.productPreference.traditional === true) {
    productTag.push(...traditional);
  }
  if (user.productPreference.sportsWear === true) {
    productTag.push(...sportsWear);
  }
  const matchTags = await Product.aggregate([
    {
      $match: {
        tags: { $in: productTag },
        user: {
          $ne: mongoose.Types.ObjectId(req.user.id),
        },
      },
    },
    {
      $addFields: {
        totalTagMatched: { $size: { $setIntersection: ['$tags', productTag] } },
      },
    },
    {
      $match: {
        totalTagMatched: {
          $gte: 2,
        },
      },
    },
    {
      $sort: { totalTagMatched: -1 },
    },
  ]);
  res.status(200).json(matchTags);
});
module.exports = { getPreference };
