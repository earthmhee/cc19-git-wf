const express = require("express");
const userRoute = express.Router();

userRoute("/getme", () => {});

module.exports = userRoute;
