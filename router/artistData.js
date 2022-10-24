const express = require("express");
const router = express.Router();
const {
  seed,
  allArtists,
  createdArtist,
  deleteArtist,
  deleteAllArtist,
  updateArtist,
  findbyid,
} = require("../controller/artistdata");
//seed
router.get("/seed", seed);

//viewallartist
router.get("/allartist", allArtists);

//createNew Artist
router.put("/newartist", createdArtist);

//delete
router.delete("/delete", deleteArtist);
router.delete("/deleteall", deleteAllArtist);

//update
router.patch("/update", updateArtist);

//getbyid
router.put("/findbyid", findbyid);

module.exports = router;
