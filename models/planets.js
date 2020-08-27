const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const planetSchema = new Schema(
  {
    namePlanet: {
      type: String,
      required: true,
      index: true,
    },
    description: {
      type: String,
      require: true,
    },
    qnt_episodes: {
      type: String,
      require: true,
    },
  },
  { timestamps: true, autoIndex: true, id: true }
);

planetSchema.index({ namePlanet: "text" });

module.exports = mongoose.model("Planet", planetSchema);
