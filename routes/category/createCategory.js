const express = require("express");
const { isLoggedIn } = require("../../Middlewares/auth/login");
const { admin } = require("../../Middlewares/auth/admin");
const { createCategory } = require("../../Controllers/category/createCategory");
const router = express.Router();

router.post("/", isLoggedIn, admin, createCategory);

module.exports = router;
