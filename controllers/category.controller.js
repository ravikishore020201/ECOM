let Categories = require("./../models/category");
let dbConnection = require("./../config/dbConfig");
let createTable = async () => {
  await dbConnection.sync((force = true));
  console.log("table created successfully");
  insertCategories();
};
let insertCategories = async () => {
  await Categories.bulkCreate([
    {
      name: "Fashion",
    },
    {
      name: "Mobiles",
    },
    {
      name: "Electronics",
    },
    {
      name: "Food",
    },
    {
      name: "Appliances",
    },
  ]);
};
let getAllCategories = async (req, res, next) => {
  let categories = await Categories.findAll();
  res.send(categories);

  res.end();
};
let getCategoryById = async (req, res, next) => {
  let categories = await Categories.findAll({
    where: {
      id: req.params.categoryId,
    },
  });
  res.send(JSON.stringify(categories));
  res.end();
};
//createTable();

module.exports = { getAllCategories, getCategoryById };
