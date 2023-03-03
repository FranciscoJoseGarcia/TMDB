const express = require("express");
const { validateToken } = require("../config/tokens");
const profileRouter = express.Router();
// const User = require("../models/Users");

profileRouter.get("/", (req, res) => {
  const token = req.cookies.token;
  const payload = validateToken(token);

  res.send(payload);
});

// profileRouter.get("/findUsers", (req, res) => {
//   const { firstName, lastName } = req.body;

//   User.findOne({ where: { fullName: `${firstName}${lastName}` } }).then(
//     (user) => {
//       if (!user) res.sendStatus(401);
//       res.send(user);
//     }
//   );
// });

module.exports = profileRouter;
