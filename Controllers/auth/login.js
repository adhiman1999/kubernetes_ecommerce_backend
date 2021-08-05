const validationResult = require("express-validator");
const jwt = require("express-jwt");
const User = require("../../models/user");

module.exports.login = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({
        success: false,
        message: errors.message,
      });
    }
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (user) {
      const { _id, email, role } = user;
      if (user.validatePassword(password)) {
        const token = await jwt.sign(
          { _id, email, role },
          process.env.JWT_SECRET,
          {
            expiresIn: "1d",
            algorithm: ["RS256"],
          }
        );
        res.cookie("Authorization", token, { httpOnly: true });
        return res.json({
          success: true,
          user: user,
        });
      } else {
        res.status(400).json({
          message: "Invalid Email or Password",
          success: false,
        });
      }
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Email already exists",
    });
  }
};
