const express = require("express");
let categoryRouter = express.Router();
let categoryController = require("./../controllers/category.controller");
categoryRouter.get("/", categoryController.getAllCategories);
categoryRouter.get("/:categoryId", categoryController.getCategoryById);
categoryRouter.post("/", categoryController.addNewCategory);
categoryRouter.delete("/", categoryController.deleteCategoryById);
categoryRouter.put("/:categoryId", categoryController.updateCategoryById);
module.exports = categoryRouter;
