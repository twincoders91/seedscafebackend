const ArtWorkDatas = require("../models/artworkData");
const data = require("../seed/ArtworkData");

//seed
const seed = async (req, res) => {
  await ArtWorkDatas.deleteMany({});
  await ArtWorkDatas.create(data, (err, data) => {
    if (err) {
      console.error(err.message);
      res.status(400).json({ status: "error", message: "seeding error" });
    } else {
      res.json({ status: "ok", message: "seeding successful" });
    }
  });
};

//viewallartwork
const allArtworkData = async (req, res) => {
  const allArtWork = await ArtWorkDatas.find({ sold: false });

  res.json(allArtWork);
};

//createNew Artwork
const createArtworkData = async (req, res) => {
  const createdArtwork = new ArtWorkDatas({
    img: req.body.img,
    category: req.body.category,
    artistName: req.body.artistName,
    artName: req.body.artName,
    description: req.body.description,
    price: req.body.price,
    physicalSize: req.body.physicalSize,
    physicalMaterial: req.body.physicalMaterial,
    sold: req.body.sold,
  });

  try {
    await createdArtwork.save();
    res.json({ status: "ok", message: "saved" });
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

//delete
const deleteArtworkData = async (req, res) => {
  try {
    const response = await ArtWorkDatas.findByIdAndDelete(req.body._id);
    console.log(response);
    res.json({ status: "ok", message: "deleted" });
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

//delete all
const deleteAllArtworkData = async (req, res) => {
  try {
    const response = await ArtWorkDatas.deleteMany();
    res.json({ status: "ok", message: "deleted" });
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

//update
const updateArtworkData = async (req, res) => {
  const response = await ArtWorkDatas.findByIdAndUpdate(req.body.id, {
    img: req.body.img,
    category: req.body.category,
    artistName: req.body.artistName,
    artName: req.body.artName,
    description: req.body.description,
    price: req.body.price,
    physicalSize: req.body.physicalSize,
    physicalMaterial: req.body.physicalMaterial,
    sold: req.body.sold,
  });
  console.log(response);
  console.log(req.body);
  res.json({ status: "ok", message: "updated" });
};

//getbyid
const findbyid = async (req, res) => {
  const oneArtwork = await ArtWorkDatas.findById(req.body._id);
  res.json(oneArtwork);
};
module.exports = {
  seed,
  allArtworkData,
  createArtworkData,
  deleteArtworkData,
  deleteAllArtworkData,
  updateArtworkData,
  findbyid,
};
