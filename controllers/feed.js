const { validationResult } = require("express-validator");
const Planet = require("../models/planets");

//Funcao para o tratamento de erro.
const errorHandler = (err, next) => {
  if (!err.statusCode) {
    err.statusCode = 500;
    err.message("Planeta não encontrado");
  }
  next(500);
};

//Listando os planetas
exports.getPosts = async (req, res, next) => {
  try {
    const planets = await Planet.find();
    res.status(200).json({
      planets,
    });
  } catch (err) {
    errorHandler(err, next);
  }
};

exports.createPost = async (req, res, next) => {
  const errors = validationResult(req);
  const namePlanet = req.body.namePlanet;
  const descripiton = req.body.description;
  const episode = req.body.episode;

  //criando um planeta novo
  const planet = new Planet({
    namePlanet: namePlanet,
    description: descripiton,
    episode: episode,
  });
  //Salvando o planeta no banco
  try {
    const planetWillSave = await planet.save();
    if (!errors.isEmpty) {
      const errors = new Error(
        "Erro de validação. Entrada de dados incorreta."
      );
      errors.statusCode = 422;
      throw errors;
    }
    res.status(201).json({
      message: "Planeta adicionado com sucesso.",
      post: planetWillSave,
    });
  } catch (err) {
    errorHandler(err, next);
  }
};

exports.getPlanetByID = async (req, res, next) => {
  const planetID = req.params.planetID;
  try {
    const planetfindedId = await Planet.findById(planetID);
    if (!planetfindedId) {
      const error = new Error("Planeta não encontrado");
      error.statusCode = 404;
      throw error;
    }
    res.status(200).json({ planet: planetfindedId });
  } catch (err) {
    errorHandler(err, next);
  }
};

exports.deletePlanet = async (req, res, next) => {
  const planetID = req.params.planetID;
  try {
    const planetWillDeletedfinded = await Planet.findById(planetID);
    if (!planetWillDeletedfinded) {
      const error = new Error("Not Found.");
      error.statusCode = 404;
      throw error;
    }
    const planetWillDeleted = await Planet.findByIdAndRemove(planetID);
    res.status(200).json({ message: "Planeta deletado com sucesso" });
  } catch (err) {
    errorHandler(err, next);
  }
};

exports.searchPlanet = async (req, res, next) => {
  const namePlanet = req.query.namePlanet;
  try {
    const planetSearched = await Planet.find({ PlanetsFounded: namePlanet });
    res.status(200).json({ planetSearched });
  } catch (err) {
    errorHandler(err, next);
  }
};
