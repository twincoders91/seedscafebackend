const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    mode: { type: String, required: true },
    number: { type: String, required: true },
    dishes: [
      {
        name: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true },
        specialRequest: { type: String },
      },
    ],
    paid: { type: Boolean, required: true },
    fulfilled: { type: Boolean, required: true },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;
