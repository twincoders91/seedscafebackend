const express = require("express");
const router = express.Router();
const {
  seed,
  allArtworkData,
  createArtworkData,
  deleteArtworkData,
  deleteAllArtworkData,
  updateArtworkData,
  findbyid,
} = require("../controller/artworkdata");
//seed
router.get("/seed", seed);

//viewallartwork
router.get("/allartwork", allArtworkData);

//createNew Artwork
router.put("/newartwork", createArtworkData);

//delete
router.delete("/delete", deleteArtworkData);
router.delete("/deleteall", deleteAllArtworkData);
//update
router.patch("/update", updateArtworkData);

//getbyid
router.put("/findbyid", findbyid);

module.exports = router;
