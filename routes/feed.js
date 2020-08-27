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
  const nameSearched = Planet.find({ $text: { $search: name } })
    .then((founded) =>
      res.status(201).json({
        message: "Planeta Encontrado",
        planet:  founded ,
      })
    )
    .catch((err) => console.log(err));
});
router.delete("/:resource/:planetID", feedController.deletePlanet);

module.exports = router;
