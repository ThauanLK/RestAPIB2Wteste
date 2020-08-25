exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [{ id, nomeDoPlaneta }],
  });
};

exports.createPost = (req, res, next) => {
  const namePlanet = req.body.title;

  res.status(201).json({
    message: "Planeta adicionado com sucesso.",
    post: { id: new Date().toISOString, nomeDoPlaneta: namePlanet },
  });
};
