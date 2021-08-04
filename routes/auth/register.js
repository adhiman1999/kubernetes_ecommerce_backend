const express = require("express");
const check = require("express-validator");
const register = require("../controllers/auth/register");
const router = express.Router();

router.post(
  "/",
  [
    check("email", "Invalid email address.").notEmpty().isEmail(),
    check("password", "Password cannot be blank.")
      .notEmpty()
      .isLength({ min: 8 })
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/
      )
      .withMessage(
        "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character."
      ),
  ],
  register
);

module.exports = router;
