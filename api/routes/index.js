const express = require("express");
const router = express.Router();

const registerRouter = require("./register");
const loginRouter = require("./login");
const logoutRouter = require("./logout");
const profileRouter = require("./profile");

router.use("/register", registerRouter);
router.use("/login", loginRouter);
router.use("/logout", logoutRouter);
router.use("/profile", profileRouter);

module.exports = router;
