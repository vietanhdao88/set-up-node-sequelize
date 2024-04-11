const express = require("express");
const router = express.Router();
const initWebRoute = (app) => {
  return app.use("/", router);
};
module.exports = initWebRoute;
