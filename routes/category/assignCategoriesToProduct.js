const express = require("express");
const { isLoggedIn } = require("../../Middlewares/auth/login");
const { admin } = require("../../Middlewares/auth/admin");
const {
  assignCategoriesToProduct,
} = require("../../Controllers/category/assignCategoriesToProduct");
const router = express.Router();

router.post("/assign/:productId", isLoggedIn, admin, assignCategoriesToProduct);

module.exports = router;
