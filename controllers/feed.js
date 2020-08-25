exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [{ namePlanet: "Bespin", firstAparation: "Episódio 5" }],
  });
};

exports.createPost = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  res.status(201).json({
    message: "Planeta adicionado com sucesso.",
    post: { id: new Date().toISOString, title: title, content: content },
  });
};
