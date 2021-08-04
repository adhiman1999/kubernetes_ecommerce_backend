const validationResult = require("express-validator");
const jwt = require("express-jwt");
const User = require("../../models/user");

module.exports.register = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({
        success: false,
        message: errors.message,
      });
    }
    const user = await new User.create(req.body);
    if (user) {
      res.json({
        success: true,
        message: "Successfully created account",
      });
    }
  } catch (error) {
    if (error.keyValue.email) {
      res.status(400).json({
        success: false,
        error,
        message: "Email already exists",
      });
    }
  }
  return res.status(500).json({
    message: "Error creating account",
    success: false,
  });
};
