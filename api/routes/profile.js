const express = require("express");
const { validateToken } = require("../config/tokens");
const profileRouter = express.Router();

profileRouter.get("/", (req, res) => {
  const token = req.cookies.token;
  const payload = validateToken(token);

  res.send(payload);
});

module.exports = profileRouter;
