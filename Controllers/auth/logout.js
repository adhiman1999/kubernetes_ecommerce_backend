const validationResult = require("express-validator");
const jwt = require("express-jwt");
const User = require("../../models/user");

module.exports.logout = (req, res) => {
  if (req.cookies.Authorization) {
    res.clearCookie("Authorization");
    res.status(200).json({
      success: true,
      message: "You have been logged out successfully.",
    });
  } else {
    res.status(400).json({
      success: false,
      message: "You are not logged in.",
    });
  }
};
