const express = require("express");
const check = require("express-validator");
const login = require("../controllers/auth/login");
const router = express.Router();

router.post(
  "/",
  [check("email").isEmail().withMessage("Email is not valid.")],
  login
);

module.exports = router;
