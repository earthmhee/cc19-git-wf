const express = require("express");
const userRoute = express.Router();

userRoute("/dashboard", () => {});
userRoute("/getme", () => {});

module.exports = userRoute;
