const mongoConnect = require("../util/database");

class Planets {
  constructor(name, description, episode) {
    this.name = name;
    this.description = description;
    this.episode = episode;
  }

  save() {}
}

module.exports = Planets;
