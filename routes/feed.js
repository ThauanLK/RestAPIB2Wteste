const express = require("express");
const { body } = require("express-validator");
const feedController = require("../controllers/feed");
const router = express.Router();
const Planet = require("../models/planets");

//GET /feed/planetas
router.get("/:resource", feedController.getPosts);

//POST /feed/post_planeta
router.post(
  "/:resource/post_planeta",
  [
    body("namePlanet").trim().isLength({ min: 5 }),
    body("description").trim().isLength({ min: 5 }),
    body("episode").trim().isLength({ min: 5 }),
  ],
  feedController.createPost
);

// router.get("/:resource/:planetID", feedController.getPlanetByID);
router.get("/:resource/result?", function (req, res, next) {
  const name = req.query.namePlanet;
  Planet.find({ $text: { $search: name } })
    .then((founded) => {
      if (founded.length == 0) {
        const error = new Error("Planeta não existente");
        error.statusCode = 404;
        throw error;
      }
      res.status(200).json({
        message: "Planeta Encontrado",
        planets: founded,
      });
    })
    .catch((err) => {
      if (!err) {
        err.statusCode = 500;
      }
      next(err);
    });
});
router.delete("/:resource/:planetID", feedController.deletePlanet);

module.exports = router;
