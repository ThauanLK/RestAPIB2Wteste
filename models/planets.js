const mongoose = require("mongoose");
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
  { timestamps: true }
);

module.exports = mongoose.model("Planet", planetSchema);
