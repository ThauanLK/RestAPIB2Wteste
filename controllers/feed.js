const { validationResult } = require("express-validator/check");
const Planet = require("../models/planets");

//Listando os planetas
exports.getPosts = (req, res, next) => {
  Planet.find()
    .then((planets) =>
      res.status(200).json({
        planets,
      })
    )
    .catch(errorHandler(err));
};

exports.createPost = (req, res, next) => {
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

  //Salvando o planeta no db
  planet.save().then((result) => {
    if (!errors.isEmpty) {
      const errors = new Error(
        "Erro de validação. Entrada de dados incorreta."
      );
      errors.statusCode = 422;
      throw errors;
    }
    res
      .status(201)
      .json({
        message: "Planeta adicionado com sucesso.",
        post: result,
      })
      .catch(errorHandler(err));
  });
};

exports.getPlanetByID = (req, res, next) => {
  const planetID = req.params.planetID;
  Planet.findById(planetID)
    .then((planet) => {
      if (!planet) {
        const error = new Error("Planeta não encontrado");
        error.statusCode = 404;
        throw error;
      }
      res.status(200).json({ planet: planet });
    })
    .catch(errorHandler(err));
};

exports.deletePlanet = (req, res, next) => {
  const planetID = req.params.planetID;
  Planet.findById(planetID)
    .then((planet) => {
      if (!planet) {
        const error = new Error("Planeta não encontrado");
        error.statusCode = 404;
        throw error;
      }
      return Planet.findByIdAndRemove(planetID);
    })
    .then((result) => {
      console.log(result);
      res.status(200).json({ message: "Planeta deletado com sucesso" });
    })
    .catch(errorHandler(err));
};

const errorHandler = (err) => {
  if (!err.statusCode) {
    err.statusCode = 500;
  }
  next(500);
};
