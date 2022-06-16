const Sequelize = require("sequelize");
require("dotenv").config("../.env");

const password = process.env.PSWD;
const HOST = process.env.HOST;

const sequelize = new Sequelize("TranslationsDB", "mr_richards", password, {
  host: HOST,
  port: 5432,
  dialect: "postgres",
});

module.exports = sequelize;
