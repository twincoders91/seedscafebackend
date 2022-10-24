const mongoose = require("mongoose");

const MenuItemsSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    img: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    tags: { type: String, required: true },
  },
  { collection: "menuItems" }
);

const MenuItems = mongoose.model("MenuItems", MenuItemsSchema);
module.exports = MenuItems;
