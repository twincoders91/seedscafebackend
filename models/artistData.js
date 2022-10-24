const mongoose = require("mongoose");

const ArtistsSchema = new mongoose.Schema(
  {
    artistName: { type: String, required: true },
    artistDescription: { type: String, required: true },
    gender: { type: String, required: true },
  },
  { collection: "artists" }
);

const Artists = mongoose.model("Artists", ArtistsSchema);
module.exports = Artists;
