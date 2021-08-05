const express = require("express");
const router = express.Router();

//<------------------------ auth routes ------------------------->
router.use("/auth", require("./auth/login"));

//<------------------------- user routes ------------------------->
//router.use("/user", require("./user"));

//<------------------------- product routes ------------------------->
//router.use("/product", require("./product"));

//<------------------------- category routes ------------------------->
router.use("/category", require("./category/assignCategoriesToProduct"));
router.use("/category", require("./category/createCategory"));
router.use("/category", require("./category/getAllCategories"));
router.use("/category", require("./category/getProductWithCategory"));

module.exports = router;
