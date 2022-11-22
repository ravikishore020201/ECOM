let Products = require("./../models/products");
let sequelize = require("sequelize");
let dbConnection = require("./../config/dbConfig");
let getAllProducts = async (req, res, next) => {
  let products = await Products.findAll();
  res.send(products);
  res.end();
};
let getProductsById = async (req, res, next) => {
  let products = await Products.findAll({
    where: {
      id: req.params.productId,
    },
  });
  res.send(products);
  res.end();
};
let createTable = async () => {
  await dbConnection.sync({ force: true });
  console.log("table created");
  insertProducts();
};
let insertProducts = async () => {
  await Products.bulkCreate([
    {
      name: "Samsung Galaxy Note",
      categoryId: 1,
      price: 18000,
    },
    {
      name: "Iphone 13",
      categoryId: 1,
      price: 60000,
    },
    {
      name: "Sony bravia",
      categoryId: 2,
      price: 40000,
    },
    {
      name: "Boat Rugged",
      categoryId: 5,
      price: 4000,
    },
    {
      name: "JBL Storm",
      categoryId: 5,
      price: 9000,
    },
    {
      name: "Vu 5",
      categoryId: 2,
      price: 32000,
    },
  ]);
};
let AddProduct = async (req, res, next) => {
  let name = req.body.name;
  let price = req.body.price;
  let categoryId = req.body.categoryId;
  await Products.create({
    name,
    price,
    categoryId,
  });
  res.status(201).send("added Product successfully");
  res.end();
};
let deleteProductById = async (req, res, next) => {
  let id = req.body.id;
  let product = await Products.findByPk(id);
  try {
    if (!product) {
      throw new Error("product not found");
    }
    await Products.destroy({
      where: {
        id,
      },
    });
    res.status(201).send("Product Deleted successfully");
    res.end();
  } catch (err) {
    next(err);
  }
};
//createTable();
module.exports = {
  getAllProducts,
  getProductsById,
  AddProduct,
  deleteProductById,
};
