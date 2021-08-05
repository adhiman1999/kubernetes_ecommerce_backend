const express = require("express");
const { logout } = require("../../Controllers/auth/logout");
const router = express.Router();

router.get("/", logout);

module.exports = router;
