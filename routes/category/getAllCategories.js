const express = require("express");
const {
  getAllCategories,
} = require("../../Controllers/category/getAllCategories");
const router = express.Router();

router.get("/", getAllCategories);

module.exports = router;
