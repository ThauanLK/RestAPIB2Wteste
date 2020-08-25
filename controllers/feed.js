const { validationResult } = require("express-validator/check");
const Planet = require("../models/planets");

exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [
      {
        namePlanet: "Bespin",
        episode: "Episódio 5",
        description: "Um planeta gasoso",
      },
    ],
  });
};

exports.createPost = (req, res, next) => {
  const errors = validationResult(req);
  const namePlanet = req.body.namePlanet;
  const descripiton = req.body.description;
  const episode = req.body.episode;

  const planet = new Planet({
    namePlanet: namePlanet,
    description: descripiton,
    episode: episode,
  });

  planet.save().then((result) => {
    res
      .status(201)
      .json({
        message: "Planeta adicionado com sucesso.",
        post: result,
      })
      .catch((err) => console.log(err));
    //Criação do planeta no db
    if (!errors.isEmpty) {
      return res.status(422).json({
        message: "Não foi possível adicionar o planeta",
        errors: errors.array,
      });
    }
  });
};
