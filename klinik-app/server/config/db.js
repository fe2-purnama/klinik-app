const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("hospital_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
