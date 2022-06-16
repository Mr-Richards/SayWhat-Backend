"use strict";
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const sequelize = require("./models");

const router = require("./router");

require("dotenv").config("./.env");

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || localhost;

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(router);

(async () => {
  try {
    await sequelize.sync();
    app.listen(PORT, () => {
      console.log(`Server listening on http://${HOST}:${PORT}...`);
    });
  } catch (error) {
    console.log(error);
  }
})();
