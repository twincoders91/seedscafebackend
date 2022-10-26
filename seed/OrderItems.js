module.exports = [
  {
    mode: "Dine In",
    number: "1",
    dishes: [
      {
        name: "Egg Avocado Toast",
        price: "13.9",
        quantity: "1",
        specialRequest: "",
      },
    ],
    paid: false,
    fulfilled: false,
  },
  {
    mode: "Dine In",
    number: "2",
    dishes: [
      {
        name: "Capuccino",
        price: "8.9",
        quantity: "1",
        specialRequest: "Less Sugar",
      },
      {
        name: "Kalahari Rooibos",
        price: "8.9",
        quantity: "1",
        specialRequest: "",
      },
    ],
    paid: false,
    fulfilled: false,
  },
  {
    mode: "Take Away",
    number: "Takeaway",
    dishes: [
      {
        name: "Chicken Baked Rice",
        price: "13.9",
        quantity: "1",
        specialRequest: "Less Cheese",
      },
    ],
    paid: false,
    fulfilled: true,
  },
];
