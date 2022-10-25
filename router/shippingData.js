const express = require("express");
const router = express.Router();
const {
  allShipping,
  createdShipping,
  deleteShippingData,
  deleteAllShippingData,
  updateShippingData,
} = require("../controller/shippingdata");

//viewallartwork
router.get("/allshipping", allShipping);

//createNew Artwork
router.put("/createshipping", createdShipping);

//delete
router.delete("/deleteshippingdata", deleteShippingData);
router.delete("/deleteallshippingdata", deleteAllShippingData);

//update
router.patch("/updateshipping", updateShippingData);

module.exports = router;
