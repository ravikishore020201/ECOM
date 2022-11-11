const express = require("express");
let router = express.Router();
let categoryController = require("./../controllers/category.controller");
router.get("/", (req, res, next) => {
  res.write("home page");
  res.end();
});
router.get("/categories", categoryController.getAllCategories);
router.get("/categories/:categoryId", categoryController.getCategoryById);
module.exports = router;
