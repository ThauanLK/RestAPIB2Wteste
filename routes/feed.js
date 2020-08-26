const express = require("express");
const { body } = require("express-validator");
const feedController = require("../controllers/feed");
const router = express.Router();

//GET /feed/planetas
router.get("/planetas", feedController.getPosts);

//POST /feed/post_planeta
router.post(
  "/post_planeta",
  [
    body("namePlanet").trim().isLength({ min: 5 }),
    body("description").trim().isLength({ min: 5 }),
    body("episode").trim().isLength({ min: 5 }),
  ],
  feedController.createPost
);

router.get("/planetas/:planetID", feedController.getPlanetByID);

router.delete("/planetas/:planetID", feedController.deletePlanet);

module.exports = router;
