const Sequelize = require("sequelize");
const dbInstance = new Sequelize("ecom_db", "root", "ravi.knr123", {
  host: "localhost",
  dialect: "mysql",
  operatorAliases: 0,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});
module.exports = dbInstance;
