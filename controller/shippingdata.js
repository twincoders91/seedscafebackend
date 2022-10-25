const ShippingData = require("../models/shippingData");

//viewallshipping
const allShipping = async (req, res) => {
  const allShipping = await ShippingData.find();
  res.json(allShipping);
};

//create new shipping
const createdShipping = async (req, res) => {
  const createdShipping = new ShippingData({
    cart: req.body.cart,
    name: req.body.name,
    address: req.body.address,
    apartment: req.body.apartment,
    postalCode: req.body.postalCode,
    phone: req.body.phone,
    email: req.body.email,
  });

  try {
    await createdShipping.save();
    res.json({ status: "ok", message: "saved" });
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

//delete
const deleteShippingData = async (req, res) => {
  try {
    const response = await ShippingData.findByIdAndDelete(req.body._id);

    res.json({ status: "ok", message: "deleted" });
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

//delete all
const deleteAllShippingData = async (req, res) => {
  try {
    const response = await ShippingData.deleteMany();
    res.json({ status: "ok", message: "deleted" });
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

//update
const updateShippingData = async (req, res) => {
  const response = await ShippingData.findByIdAndUpdate(
    { _id: req.body._id },
    {
      name: req.body.name,
      address: req.body.address,
      apartment: req.body.apartment,
      postalCode: req.body.postalCode,
      email: req.body.email,
    }
  );
  console.log(response);
  res.json({ status: "ok", message: "updated" });
};

module.exports = {
  allShipping,
  createdShipping,
  deleteShippingData,
  deleteAllShippingData,
  updateShippingData,
};
