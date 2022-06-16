const Translations = require("../models/translationsModel");
const { v4: uuidv4 } = require("uuid");

exports.postTranslation = async (req, res) => {
  try {
    const translation = {
      original: req.body.original,
      translated: req.body.translated,
      id: uuidv4(),
      userid: req.body.userid,
    };
    await Translations.create(translation);
    req.status(201);
    req.send("Translation posted successfully");
  } catch (error) {
    console.log(error, "internal server error");
    res.status(500);
  }
};

exports.getTranslationByUserId = async (req, res) => {
  try {
    const translations = await Translations.findAll({
      where: { userid: req.params["userid"] },
    });
    res.status(200);
    res.send(translations);
  } catch (error) {
    console.log(error, "internal server error");
    res.status(500);
  }
};
