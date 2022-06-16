const { DataTypes } = require("sequelize");
const sequelize = require("./index");

const Users = sequelize.define(
  "users",
  {
    id: {
      type: DataTypes.TEXT,
      allowNull: false,
      primaryKey: true,
    },
    username: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);
module.exports = Users;
