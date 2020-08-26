const express = require("express");
const { body } = require("express-validator");
const feedController = require("../controllers/feed");
const router = express.Router();

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

router.get("/:resource/:planetID", feedController.getPlanetByID);
router.get(
  "/:resource/search/:namePlanet?=namePlanet",
  feedController.searchPlanet
);
router.delete("/:resource/:planetID", feedController.deletePlanet);

module.exports = router;
