const sequelize = require("sequelize");
const dbConnection = require("./../config/dbConfig");
let Categories = dbConnection.define(
  "categories",
  {
    id: {
      type: sequelize.DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      notNull: true,
    },
    name: {
      type: sequelize.DataTypes.STRING,
      notNull: true,
    },
  },
  {
    timestamps: false,
  }
);
module.exports = Categories;
