const mongoose = require("mongoose");

const ArtWorkDatasSchema = new mongoose.Schema(
  {
    img: { type: String, required: true },
    category: { type: String, required: true },
    artistName: { type: String, required: true },
    artName: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    physicalSize: { type: String, required: true },
    physicalMaterial: { type: String, required: true },
    sold: { type: Boolean },
  },
  { collection: "artWorkDatas" }
);

const ArtWorkDatas = mongoose.model("ArtWorkDatas", ArtWorkDatasSchema);
module.exports = ArtWorkDatas;
