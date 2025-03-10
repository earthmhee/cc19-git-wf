const express = require("express");
const userRoute = express.Router();

userRoute("/dashboard", () => {});

module.exports = userRoute;