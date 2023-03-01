const express = require("express");
const logoutRouter = express.Router();

logoutRouter.post("/", (req, res) => {
  res.clearCookie("token");
  res.sendStatus(204);
});

module.exports = logoutRouter;
