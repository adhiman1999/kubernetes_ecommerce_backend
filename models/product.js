require("dotenv").config();
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3,
    maxlength: 100,
  },
  description: {
    type: String,
    required: true,
    trim: true,
    minlength: 100,
    maxlength: 1000,
  },
  maxRetailprice: {
    type: Number,
    required: true,
    min: 0,
    max: 1000000,
  },
  minRetailprice: {
    type: Number,
    required: true,
    min: 0,
    max: 1000000,
  },
  category: [
    {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 100,
    },
  ],
  images: [
    {
      type: String,
      required: false,
      trim: true,
    },
  ],
  stock: {
    type: Number,
    required: true,
    min: 0,
    max: 1000000,
  },
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
