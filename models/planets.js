const mongoose = require("mongoose");
const { Timestamp } = require("mongodb");
const Schema = mongoose.Schema;

const planetSchema = new Schema(
  {
    namePlanet: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      require: true,
    },
    episode: {
      type: String,
      require: true,
    },
  },
  (Timestamp = true)
);

module.exports = mongoose.model("Planet", planetSchema);
