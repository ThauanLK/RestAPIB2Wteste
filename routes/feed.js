const express = require("express");
const { body } = require("express-validator");
const feedController = require("../controllers/feed");
const router = express.Router();
const Planet = require("../models/planets");

//GET /feed/planetas
router.get("/:resource", feedController.getPosts);

//POST /feed/post_planeta
router.post(
  "/:resource",
  [
    body("namePlanet").trim().isLength({ min: 5 }),
    body("description").trim().isLength({ min: 5 }),
    body("episode").trim().isLength({ min: 5 }),
  ],
  feedController.createPost
);

// router.get("/:resource/:planetID", feedController.getPlanetByID);
router.get("/:resource/result", function (req, res, next) {
  const name = req.query;
  const nameSearched = Planet.find({ $text: { $search: name } });
  console.log("REQ.Query.NAMEPLANET", name);
  console.log("NAMESEARCHED", nameSearched);
});
router.delete("/:resource/:planetID", feedController.deletePlanet);

module.exports = router;
