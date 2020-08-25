const { validationResult } = require("express-validator/check");
const Planet = require("../models/planets");

//Listando os planetas
exports.getPosts = async (req, res, next) => {
  const data = await Planet.find({});
  res.status(200).json({
    data,
  });
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
    res
      .status(201)
      .json({
        message: "Planeta adicionado com sucesso.",
        post: result,
      })
      .catch((err) => console.log(err));
    if (!errors.isEmpty) {
      return res.status(422).json({
        message: "Não foi possível adicionar o planeta",
        errors: errors.array,
      });
    }
  });
};
