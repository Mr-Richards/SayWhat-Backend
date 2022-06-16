"use strict";
const router = require("express").Router();
const translationController = require("./controllers/translationController");
const userController = require("./controllers/userController");

router.post("/user", userController.createUser);
router.get("/user/:id", userController.getUserById);
router.post("/translations", translationController.postTranslation);
router.get(
  "/translations/:userid",
  translationController.getTranslationByUserId
);

module.exports = router;
