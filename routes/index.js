const express = require("express");
let router = express.Router();
let categoryRouter = require("./category.routes");
let productRouter = require("./products.routes");
router.get("/", (req, res, next) => {
  res.write("home page");
  res.end();
});
router.use("/ecomm/api/v1/categories", categoryRouter);
router.use("/ecomm/api/v1/products", productRouter);

module.exports = router;
