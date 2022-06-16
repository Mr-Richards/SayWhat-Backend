const Users = require("../models/usersModel");
const { v4: uuidv4 } = require("uuid");

exports.createUser = async (req, res) => {
  try {
    const doesUserExist = await Users.findOne({ where: { id: req.body.id } });
    if (doesUserExist) {
      res.status(400);
      res.send("User already exists");
    } else {
      const user = { id: req.body.id, username: req.body.username };
      await Users.create(user);
      res.status(201);
      res.send("User created successfully");
    }
  } catch (error) {
    console.log(error, "internal server error");
    res.status(500);
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await Users.findOne({ where: { id: req.params["id"] } });
    res.status(200);
    res.send(user);
  } catch (error) {
    console.log(error, "internal server error");
    res.status(500);
  }
};
