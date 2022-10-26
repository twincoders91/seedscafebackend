const express = require("express");
const router = express.Router();

const Order = require("../models/Order");
const orderSeed = require("../seed/OrderItems");

router.put("/seed", async (req, res) => {
  await Order.deleteMany({});
  await Order.create(orderSeed, (err, data) => {
    if (err) {
      console.error(err.message);
      res.status(400).json({ status: "error" });
    } else {
      res.json({ status: "ok", message: "seeding succes" });
    }
  });
});

router.put("/create", async (req, res) => {
  const createOrderItem = new Order({
    mode: req.body.mode,
    number: req.body.number,
    dishes: req.body.dishes,
    paid: req.body.paid,
    fulfilled: req.body.fulfilled,
  });

  await Order.insertMany(createOrderItem, function (err, docsInserted) {
    res.json(docsInserted);
  });
  // res.json({ status: "okay", message: "Order item created" });
});

router.delete("/delete/:id", async (req, res) => {
  await Order.deleteOne({ id: req.params.id });

  res.json({ status: "okay", message: "Order item deleted" });
});

router.get("/", async (req, res) => {
  console.log("a");
  const response = await Order.find();
  console.log("b");
  res.json(response);
});

router.get("/count", async (req, res) => {
  const response = await Order.countDocuments();
  res.json(response);
});

router.get("/id/:id", async (req, res) => {
  const response = await Order.findById(req.params.id);
  res.json(response);
});

router.patch("/update/:id", async (req, res) => {
  const response = await Order.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    price: req.body.price,
    img: req.body.img,
    description: req.body.description,
    category: req.body.category,
    tags: req.body.tags,
  });

  console.log(response);
  res.json({ status: "okay", message: "menu item updated" });
});

module.exports = router;
