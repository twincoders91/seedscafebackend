const mongoose = require("mongoose");

const ShippingDatasSchema = new mongoose.Schema(
  {
    cart: [
      {
        img: { type: String, required: true },
        category: { type: String, required: true },
        artistName: { type: String, required: true },
        artName: { type: String, required: true },
        description: { type: String, required: true },
        price: { type: Number, required: true },
        physicalSize: { type: String, required: true },
        physicalMaterial: { type: String, required: true },
      },
    ],
    name: { type: String, required: true },
    address: { type: String, required: true },
    apartment: { type: String, required: true },
    postalCode: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
  },
  { collection: "shippingDatas" }
);

const ShippingDatas = mongoose.model("ShippingDatas", ShippingDatasSchema);
module.exports = ShippingDatas;
