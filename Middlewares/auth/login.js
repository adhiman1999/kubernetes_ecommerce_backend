const jwt = require("express-jwt");
const User = require("../../models/user");

module.exports.isLoggedIn = (req, res, next) => {
  try {
    const token = req.cookies.Authorization;
    if (!token) return res.status(403).send("Access denied.");

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(400).send("Invalid token.");
  }
};
