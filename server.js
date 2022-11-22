const express = require("express");
const serverConfig = require("./config/serverConfig");
let bodyParser = require("body-parser");
const router = require("./routes/index");
const ErrorHandler = require("./middlewares/ErrorHandler");
const expressApp = express();
expressApp.use(bodyParser.json());
expressApp.use(router);
expressApp.use(ErrorHandler);
expressApp.listen(serverConfig.PORT, () => {
  console.log(`server listening on ${serverConfig.PORT}`);
});
