const Artists = require("../models/artistData");
const data = require("../seed/ArtistData");

//seed
const seed = async (req, res) => {
  await Artists.deleteMany({});
  await Artists.create(data, (err, data) => {
    if (err) {
      console.error(err.message);
      res.status(400).json({ status: "error", message: "seeding error" });
    } else {
      res.json({ status: "ok", message: "seeding successful" });
    }
  });
};

//viewallartist
const allArtists = async (req, res) => {
  const allArtist = await Artists.find();
  res.json(allArtist);
};

//createNew Artist
const createdArtist = async (req, res) => {
  const createdArtist = new Artists({
    artistName: req.body.artistName,
    artistDescription: req.body.artistDescription,
    gender: req.body.gender,
  });

  try {
    await createdArtist.save();
    res.json({ status: "ok", message: "saved" });
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

//delete
const deleteArtist = async (req, res) => {
  try {
    const response = await Artists.findByIdAndDelete(req.body._id);

    res.json({ status: "ok", message: "deleted" });
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

//delete all
const deleteAllArtist = async (req, res) => {
  try {
    const response = await Artists.deleteMany();
    res.json({ status: "ok", message: "deleted" });
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

//update
const updateArtist = async (req, res) => {
  const response = await Artists.findByIdAndUpdate(
    { _id: req.body._id },
    {
      artistName: req.body.artistName,
      artistDescription: req.body.artistDescription,
      gender: req.body.gender,
    }
  );
  console.log(response);
  res.json({ status: "ok", message: "updated" });
};

//getbyid
const findbyid = async (req, res) => {
  const oneArtist = await Artists.findById(req.body._id);
  res.json(oneArtist);
};
module.exports = {
  seed,
  allArtists,
  createdArtist,
  deleteArtist,
  deleteAllArtist,
  updateArtist,
  findbyid,
};
