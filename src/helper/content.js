import espresso from "../assets/espresso.jpg";
import doppio from "../assets/doppio.jpg";
import macchiato from "../assets/macchiato.jpg";
import cappuccino from "../assets/cappuccino.jpg";
import cafe_au_lalit from "../assets/cafe_au_lalit.jpg";
import irish_coffee from "../assets/irish_coffee.jpg";
 

export const coffeeVariant = [
  {
    id: 1,
    name: "Espresso",
    img: espresso,
    price: "20",
    description:
      "Espresso as a standalone coffee is served everywhere. It contains literally the basic essence. Coffee and water. No strings attached.",
    btn_text: "Order Now",
  },
  {
    id: 2,
    name: "Doppio",
    img: doppio,
    price: "15",
    description:
      "Doppio in Italian literally means ‘double.’ It is a double shot of Espresso coffee.",
    btn_text: "Order Now",
  },
  {
    id: 3,
    name: "Macchiato",
    img: macchiato,
    price: "25",
    description:
      "Macchiato in Italian means ‘stained.’ This is because a serving of Macchiato is a normal Espresso shot with a little-foamed milk on the top.",
    btn_text: "Order Now",
  },
  {
    id: 4,
    name: "Cappuccino",
    img: cappuccino,
    price: "30",
    description:
      "Everyone’s favourite and the most well-known and standard coffee drink, cappuccino contains more milk-to-coffee ratio.",
    btn_text: "Order Now",
  },
  {
    id: 5,
    name: "Café au Lait",
    img: cafe_au_lalit,
    price: "40",
    description:
      "Café au Lait literally means ‘coffee with milk.’ It is a French press coffee preparation with equal amounts coffee brew and scalded milk.",
    btn_text: "Order Now",
  },
  {
    id: 6,
    name: "Irish",
    img: irish_coffee,
    price: "50",
    description:
      "The Irish sure know to stir things up and making literally any dish or drink interesting. Ever heard whiskey in coffee? Yep! This is the one.",
    btn_text: "Order Now",
  },
];
