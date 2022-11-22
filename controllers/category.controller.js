let Categories = require("./../models/category");
let dbConnection = require("./../config/dbConfig");
let createTable = async () => {
  await dbConnection.sync();
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
  res.send(categories);
  res.end();
};
let addNewCategory = async (req, res, next) => {
  try {
    let categoryToAdd = req.body;
    await Categories.create({
      name: categoryToAdd,
    });
    res.status(201).send("added category");
    res.end();
  } catch (err) {
    next(err);
  }
};
let deleteCategoryById = async (req, res, next) => {
  let id = req.body.id;
  let categoryExist = await Categories.findByPk(id);
  try {
    if (!categoryExist) {
      throw new Error("category not found");
    }
    await Categories.destroy({
      where: {
        id,
      },
    });
    res.status(200).send("deleted successfully");
    res.end();
  } catch (err) {
    next(err);
  }
};
let updateCategoryById = async (req, res, next) => {
  let id = req.params.categoryId;
  let categoriesToUpdate = {
    name: req.body.name,
  };
  await Categories.update(categoriesToUpdate, {
    where: {
      id,
    },
  });
  let updateCategory = await Categories.findByPk(id);
  res.status(200).send(updateCategory);
  res.end();
};
//createTable();

module.exports = {
  getAllCategories,
  getCategoryById,
  addNewCategory,
  deleteCategoryById,
  updateCategoryById,
};
