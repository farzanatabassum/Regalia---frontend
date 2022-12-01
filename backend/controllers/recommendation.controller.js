const User = require('../models/user.model');
const Product = require('../models/product.model');
const asyncHandler = require('express-async-handler');
const preferenceTags = require('../helper/preferenceTags');
//api/recommendations/getPreference
//get
//private
const getPreference = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);
  console.log('User Preference', user.productPreference);
  const productTag = [];
  if (user.productPreference.summer === true) {
    for (let i = 0; i < preferenceTags.summer.length; i++) {
      productTag.push(preferenceTags.summer[i]);
    }
  }
  if (user.productPreference.winter === true) {
    for (let i = 0; i < preferenceTags.winter.length; i++)
      productTag.push(preferenceTags.winter[i]);
  }
  if (user.productPreference.casual === true) {
    for (let i = 0; i < preferenceTags.casual.length; i++)
      productTag.push(preferenceTags.casual[i]);
  }
  if (user.productPreference.formal === true) {
    for (let i = 0; i < preferenceTags.formal.length; i++)
      productTag.push(preferenceTags.formal[i]);
  }
  if (user.productPreference.traditional === true) {
    for (let i = 0; i < preferenceTags.traditional.length; i++)
      productTag.push(preferenceTags.traditional[i]);
  }
  if (user.productPreference.sportsWear === true) {
    for (let i = 0; i < preferenceTags.sportsWear.length; i++)
      productTag.push(preferenceTags.sportsWear[i]);
  }
  console.log(productTag);
  const matchTags = await Product.aggregate([
    { $match: { tags: { $in: productTag } } },
  ]);
  res.status(200).json(matchTags);
});
module.exports = { getPreference };
