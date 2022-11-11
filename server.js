const express = require("express");
const serverConfig = require("./config/serverConfig");
const router = require("./routes/index");
const expressApp = express();
expressApp.use(router);
expressApp.listen(serverConfig.PORT, () => {
  console.log(`server listening on ${serverConfig.PORT}`);
});
