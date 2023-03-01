const express = require("express");
const loginRouter = express.Router();
const User = require("../models/Users");
const { generateToken } = require("../config/tokens");

loginRouter.post("/", (req, res) => {
  const { email, password } = req.body;

  User.findOne({ where: { email } }).then((user) => {
    if (!user) return res.sendStatus(401);
    user.validatePassword(password).then((isValid) => {
      if (!isValid) return res.sendStatus(401);

      const payload = {
        id: user.dataValues.id,
        email: user.dataValues.email,
        firstName: user.dataValues.firstName,
        lastName: user.dataValues.lastName,
      };

      const token = generateToken(payload);
      res.cookie("token", token);
      res.send(payload);
    });
  });
});

module.exports = loginRouter;
