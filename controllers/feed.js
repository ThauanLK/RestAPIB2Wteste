exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [{ namePlanet: "Bespin", firstAparation: "Episódio 5" }],
  });
};

const { validationResult } = require("express-validator/check");

exports.createPost = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty) {
    return res
      .status(422)
      .json({
        message: "Não foi possível adicionar o planeta",
        errors: errors.array,
      });
  }
  const namePlanet = req.body.namePlanet;
  const firstAparation = req.body.firstAparation;
  res.status(201).json({
    message: "Planeta adicionado com sucesso.",
    post: {
      id: new Date().toISOString,
      namePlanet: namePlanet,
      firstAparation: firstAparation,
    },
  });
};
