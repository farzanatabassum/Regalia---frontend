const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
  {
    seller: {
      // set the userId from user collection
      // so, you can reference it
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    image: {
      type: String,
      required: [true, 'Please provide an image'],
    },
    category: {
      type: String,
      required: [true, 'Please provide a category'],
    },
    brand: {
      type: String,
      required: [true, 'Please provide a brand name'],
    },
    fabric: {
      type: String,
      required: [true, 'Please provide a fabric name'],
    },
    size: {
      type: String,
      required: [true, 'Please provide size of the product'],
    },
    condition: {
      type: String,
      required: [true, 'Please provide the condition of the product'],
    },
    gender: {
      type: String,
      required: [true, 'Please provide the gender'],
    },
    originPrice: {
      type: Number,
      required: [true, 'Please provide the original price of the product'],
    },
    sellingPrice: {
      type: Number,
      required: [true, 'Please provide the selling price of the product'],
    },
    tags: {
      type: Array,
      required: [true, 'Please provide the tags of the product'],
      validate: (v) => Array.isArray(v) && v.length > 1,
    },
    totalViews:{
      type:Number,
      default:0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Product', productSchema);
