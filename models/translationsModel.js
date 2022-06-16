const { DataTypes } = require("sequelize");
const sequelize = require("./index");

const Translations = sequelize.define(
  "translations",
  {
    id: {
      type: DataTypes.TEXT,
      allowNull: false,
      primaryKey: true,
    },
    original: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    translated: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    userid: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);
module.exports = Translations;
