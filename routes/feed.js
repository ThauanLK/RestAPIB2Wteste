const express = require("express");

const feedController = require("../controllers/feed");
const router = express.Router();

//GET /feed/posts
router.get("/posts", feedController);

//POST /feed/posts

module.exports = router;
