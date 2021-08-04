const express = require("express");
const router = express.Router();

//<------------------------ auth routes ------------------------->
router.use("/auth", require("./auth/login"));
router.use("/auth", require("./auth/register"));
router.use("/auth", require("./auth/logout"));
router.use("/auth", require("./auth/forgot"));
router.use("/auth", require("./auth/reset"));
router.use("/auth", require("./auth/verify"));

//<------------------------- user routes ------------------------->
router.use("/user", require("./user"));

//<------------------------- product routes ------------------------->
router.use("/product", require("./product"));

//<------------------------- category routes ------------------------->
router.use("/category", require("./category"));

module.exports = router;
