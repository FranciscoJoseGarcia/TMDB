const express = require("express");
const registerRouter = express.Router();
const User = require("../models/Users");

registerRouter.post("/", (req, res) => {
  User.create(req.body).then((user) => {
    res.status(201).send(user);
  });
});

module.exports = registerRouter;
