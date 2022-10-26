const MenuItems = require("../models/menuItems");
const data = require("../seed/MenuItems");

//seed
const seed = async (req, res) => {
  await MenuItems.deleteMany({});
  await MenuItems.create(data, (err, data) => {
    if (err) {
      console.error(err.message);
      res.status(400).json({ status: "error", message: "seeding error" });
    } else {
      res.json({ status: "ok", message: "seeding successful" });
    }
  });
};

//viewallmenuitems
const allMenuItems = async (req, res) => {
  const allItems = await MenuItems.find();

  res.json(allItems);
};

//createnewmenuitems
const createMenuItem = async (req, res) => {
  const createdItem = new MenuItems({
    name: req.body.name,
    price: req.body.price,
    img: req.body.img,
    description: req.body.description,
    category: req.body.category,
    // will this be optional?
    tags: req.body.tags,
  });

  await MenuItems.insertMany(createdItem, function (err, docsInserted) {
    res.json(docsInserted[0]);
    console.log(docsInserted[0]);
  });

  // try {
  //   await createdItem.save();
  //   res.json({ status: "ok", message: "saved" });
  // } catch (err) {
  //   console.error(err.message);
  //   process.exit(1);
  // }
};

//delete
const deleteMenuItem = async (req, res) => {
  try {
    const response = await MenuItems.findByIdAndDelete(req.body._id);

    res.json({ status: "ok", message: "deleted" });
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

//delete all
const deleteAllMenuItems = async (req, res) => {
  try {
    const response = await MenuItems.deleteMany();
    res.json({ status: "ok", message: "deleted" });
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

//update
const updateMenuItems = async (req, res) => {
  const doc = await MenuItems.findOneAndUpdate(
    { _id: req.params.id },
    {
      name: req.body.name,
      price: req.body.price,
      img: req.body.img,
      description: req.body.description,
      category: req.body.category,
      // will this be optional?
      tags: req.body.tags,
    },
    { new: true, rawResult: true }
    // { new: true },
    // (err, doc) => {
    //   res.json(doc);
    // }
  );

  // await MenuItems.findOneAndUpdate({ _id: req.params.id }, {});
  // console.log(response);

  // res.json(response);
  console.log(doc);
  res.json(doc);
};

//getbyid
const findbyid = async (req, res) => {
  const oneItem = await MenuItems.findById(req.params.id);
  res.json(oneItem);
};

const findbycategory = async (req, res) => {
  const items = await MenuItems.find({ category: req.params.category });
  res.json(items);
};

module.exports = {
  seed,
  allMenuItems,
  createMenuItem,
  deleteMenuItem,
  deleteAllMenuItems,
  updateMenuItems,
  findbyid,
  findbycategory,
};
