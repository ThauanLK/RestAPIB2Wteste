exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [{ namePlanet: "Bespin", firstAparation: "Episódio 5" }],
  });
};

exports.createPost = (req, res, next) => {
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
