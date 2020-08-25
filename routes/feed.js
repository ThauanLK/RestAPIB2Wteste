const express = require("express");
const { body } = require("express-validator/check");
const feedController = require("../controllers/feed");
const router = express.Router();

//GET /feed/posts
router.get("/posts", feedController.getPosts);

//POST /feed/post
router.post(
  "/post",
  [body("namePlanet").trim().isLength({ min: 5 })],
  feedController.createPost
);

module.exports = router;
