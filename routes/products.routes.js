const express = require("express");
const productRouter = express.Router();
const productController = require("./../controllers/products.controller");
productRouter.get("/", productController.getAllProducts);
productRouter.get("/:productId", productController.getProductsById);
productRouter.post("/", productController.AddProduct);
productRouter.delete("/", productController.deleteProductById);
module.exports = productRouter;
