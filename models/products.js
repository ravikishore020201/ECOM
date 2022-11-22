const sequelize = require("sequelize");
const dbConnection = require("./../config/dbConfig");
let Products = dbConnection.define(
  "products",
  {
    id: {
      type: sequelize.DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      notNull: true,
    },
    name: {
      type: sequelize.DataTypes.STRING,
      notNull: true,
    },
    price: {
      type: sequelize.DataTypes.BIGINT,
      notNull: true,
    },
    categoryId: {
      type: sequelize.DataTypes.INTEGER,
      notNull: true,
    },
  },

  {
    timestamps: false,
  }
);
module.exports = Products;
