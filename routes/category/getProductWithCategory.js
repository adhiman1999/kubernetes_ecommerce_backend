const express = require("express");
const {
  getProductWithCategory,
} = require("../../Controllers/category/getProductWithCategory");
const router = express.Router();

router.get("/product/:categoryId", getProductWithCategory);

module.exports = router;
