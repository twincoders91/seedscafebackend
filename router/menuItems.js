const express = require("express");
const router = express.Router();
const {
  seed,
  allMenuItems,
  createMenuItem,
  deleteMenuItem,
  deleteAllMenuItems,
  updateMenuItems,
  findbyid,
} = require("../controller/menuitems");

//seed
router.put("/seedmenuitems", seed);

//view all menu items
router.get("/allmenuitems", allMenuItems);

//create new menu item
router.put("/newmenuitem", createMenuItem);

//delete
router.delete("/deletemenuitem", deleteMenuItem);
router.delete("/deleteallmenuitems", deleteAllMenuItems);

//update
router.patch("/updatemenuitem", updateMenuItems);

//getbyid
router.put("/findbyid", findbyid);

module.exports = router;
