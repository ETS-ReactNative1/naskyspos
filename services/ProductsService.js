const PRODUCTS = [
  {
    id: 100,
    name: "Oreo Shakes (Small)",
    price: 15,
    icon: require('../assets/products/icons/milkshakes.png'),
    image: require('../assets/products/images/oreoshakes.jpg'),
    description: "Milkshakes"
  },
  {
    id: 101,
    name: "Oreo Shakes (Large)",
    price: 20,
    icon: require('../assets/products/icons/milkshakes.png'),
    image: require('../assets/products/images/oreoshakes.jpg'),
    description: "Milkshakes"
  },
  {
    id: 102,
    name: "Vanilla Shakes (Small)",
    price: 15,
    icon: require('../assets/products/icons/milkshakes.png'),
    image: require('../assets/products/images/vanillashakes.jpg'),
    description: "Milkshakes"
  },
  {
    id: 103,
    name: "Vanilla Shakes (Large)",
    price: 20,
    icon: require('../assets/products/icons/milkshakes.png'),
    image: require('../assets/products/images/vanillashakes.jpg'),
    description: "Milkshakes"
  },
  {
    id: 104,
    name: "Strawberry Shakes (Small)",
    price: 15,
    icon: require('../assets/products/icons/milkshakes.png'),
    image: require('../assets/products/images/strawberryshakes.jpg'),
    description: "Milkshakes"
  },
  {
    id: 105,
    name: "Strawberry Shakes (Large)",
    price: 20,
    icon: require('../assets/products/icons/milkshakes.png'),
    image: require('../assets/products/images/strawberryshakes.jpg'),
    description: "Milkshakes"
  },
  {
    id: 106,
    name: "Chocolate Shakes (Small)",
    price: 15,
    icon: require('../assets/products/icons/milkshakes.png'),
    image: require('../assets/products/images/chocolateshakes.jpg'),
    description: "Milkshakes"
  },
  {
    id: 107,
    name: "Chocolate Shakes (Large)",
    price: 20,
    icon: require('../assets/products/icons/milkshakes.png'),
    image: require('../assets/products/images/chocolateshakes.jpg'),
    description: "Milkshakes"
  },
  {
    id: 109,
    name: "Batido Rojo (Small)",
    price: 15,
    icon: require('../assets/products/icons/smoothies.png'),
    image: require('../assets/products/images/strawberrysmoothies.jpg'),
    description: "Strawberry Smoothies"
  },
  {
    id: 110,
    name: "Batido Rojo (Large)",
    price: 20,
    icon: require('../assets/products/icons/smoothies.png'),
    image: require('../assets/products/images/strawberrysmoothies.jpg'),
    description: "Strawberry Smoothies"
  },
  {
    id: 111,
    name: "Batido Blanco (Small)",
    price: 15,
    icon: require('../assets/products/icons/smoothies.png'),
    image: require('../assets/products/images/bananasmoothies.jpg'),
    description: "Banana Smoothies"
  },
  {
    id: 112,
    name: "Batido Blanco (Large)",
    price: 20,
    icon: require('../assets/products/icons/smoothies.png'),
    image: require('../assets/products/images/bananasmoothies.jpg'),
    description: "Banana Smoothies"
  },
  {
    id: 113,
    name: "Batido Gris (Small)",
    price: 15,
    icon: require('../assets/products/icons/smoothies.png'),
    image: require('../assets/products/images/bananacoconutsmoothies.jpg'),
    description: "Banana & Coconut Smoothies"
  },
  {
    id: 114,
    name: "Batido Gris (Large)",
    price: 20,
    icon: require('../assets/products/icons/smoothies.png'),
    image: require('../assets/products/images/bananacoconutsmoothies.jpg'),
    description: "Banana & Coconut Smoothies"
  },
  {
    id: 115,
    name: "Batido Amarillo (Small)",
    price: 15,
    icon: require('../assets/products/icons/smoothies.png'),
    image: require('../assets/products/images/mangosmoothies.jpg'),
    description: "Mango Smoothies"
  },
  {
    id: 116,
    name: "Batido Amarillo (Large)",
    price: 20,
    icon: require('../assets/products/icons/smoothies.png'),
    image: require('../assets/products/images/mangosmoothies.jpg'),
    description: "Mango Smoothies"
  },
  {
    id: 117,
    name: "Batido Verde (Small)",
    price: 15,
    icon: require('../assets/products/icons/smoothies.png'),
    image: require('../assets/products/images/cucumbergingermint.jpg'),
    description: "Dertox-cucumber, ginger & mint Smoothies"
  },
  {
    id: 118,
    name: "Batido Verde (Large)",
    price: 20,
    icon: require('../assets/products/icons/smoothies.png'),
    image: require('../assets/products/images/cucumbergingermint.jpg'),
    description: "Dertox-cucumber, ginger & mint Smoothies"
  },
  {
    id: 119,
    name: "Pinacocolada (Small)",
    price: 15,
    icon: require('../assets/products/icons/smoothies.png'),
    image: require('../assets/products/images/cucumbergingermint.jpg'),
    description: "Pineapple & coconut Smoothies"
  },
  {
    id: 120,
    name: "Pinacocolada (Large)",
    price: 20,
    icon: require('../assets/products/icons/smoothies.png'),
    image: require('../assets/products/images/cucumbergingermint.jpg'),
    description: "Pineapple & coconut Smoothies"
  },
  {
    id: 121,
    name: "Customized Smoothies (Small)",
    price: 15,
    icon: require('../assets/products/icons/smoothies.png'),
    image: require('../assets/products/images/customisedsmoothies.jpg'),
    description: "Smoothies"
  },
  {
    id: 122,
    name: "Customized Smoothies (Large)",
    price: 20,
    icon: require('../assets/products/icons/smoothies.png'),
    image: require('../assets/products/images/customisedsmoothies.jpg'),
    description: "Smoothies"
  },
  {
    id: 123,
    name: "Naranja (Small)",
    price: 7,
    icon: require('../assets/products/icons/juice.png'),
    image: require('../assets/products/images/orangejuice.jpg'),
    description: "Orange Juice"
  },
  {
    id: 124,
    name: "Naranja (Large)",
    price: 10,
    icon: require('../assets/products/icons/juice.png'),
    image: require('../assets/products/images/orangejuice.jpg'),
    description: "Orange Juice"
  },
  {
    id: 125,
    name: "Pina (Small)",
    price: 7,
    icon: require('../assets/products/icons/juice.png'),
    image: require('../assets/products/images/pineapplejuice.jpg'),
    description: "Pineapple Juice"
  },
  {
    id: 126,
    name: "Pina (Large)",
    price: 10,
    icon: require('../assets/products/icons/juice.png'),
    image: require('../assets/products/images/pineapplejuice.jpg'),
    description: "Pineapple Juice"
  },
  {
    id: 127,
    name: "Lemonada (Small)",
    price: 7,
    icon: require('../assets/products/icons/juice.png'),
    image: require('../assets/products/images/lemonadejuice.jpg'),
    description: "Lemonade Juice"
  },
  {
    id: 128,
    name: "Lemonada (Large)",
    price: 10,
    icon: require('../assets/products/icons/juice.png'),
    image: require('../assets/products/images/lemonadejuice.jpg'),
    description: "Lemonade Juice"
  },
  {
    id: 129,
    name: "Mango Juice (Small)",
    price: 7,
    icon: require('../assets/products/icons/juice.png'),
    image: require('../assets/products/images/mangojuice.jpg'),
    description: "Mango Juice"
  },
  {
    id: 130,
    name: "Mango Juice (Large)",
    price: 10,
    icon: require('../assets/products/icons/juice.png'),
    image: require('../assets/products/images/mangojuice.jpg'),
    description: " Mango Juice"
  },
  {
    id: 131,
    name: "Sandia (Small)",
    price: 7,
    icon: require('../assets/products/icons/juice.png'),
    image: require('../assets/products/images/watermelonjuice.jpg'),
    description: "Watermelon Juice"
  },
  {
    id: 132,
    name: "Sandia (Large)",
    price: 10,
    icon: require('../assets/products/icons/juice.png'),
    image: require('../assets/products/images/watermelonjuice.jpg'),
    description: "Watermelon Juice"
  },
  {
    id: 133,
    name: "UVA (Small)",
    price: 7,
    icon: require('../assets/products/icons/juice.png'),
    image: require('../assets/products/images/grapejuice.jpg'),
    description: "Grapes Juice"
  },
  {
    id: 134,
    name: "UVA (Large)",
    price: 10,
    icon: require('../assets/products/icons/juice.png'),
    image: require('../assets/products/images/grapejuice.jpg'),
    description: "Grapes Juice"
  },
  {
    id: 135,
    name: "Cocktails (Small)",
    price: 7,
    icon: require('../assets/products/icons/juice.png'),
    image: require('../assets/products/images/cocktail.jpg'),
    description: "Mixed Fruits Juice"
  },
  {
    id: 136,
    name: "Cocktails (Large)",
    price: 10,
    icon: require('../assets/products/icons/juice.png'),
    image: require('../assets/products/images/cocktail.jpg'),
    description: "Mixed Fruits Juice"
  },
  {
    id: 137,
    name: "Mocha (Small)",
    price: 15,
    icon: require('../assets/products/icons/frappuccino.png'),
    image: require('../assets/products/images/mochafrapp.jpg'),
    description: "Frappuccino "
  },
  {
    id: 138,
    name: "Mocha (Large)",
    price: 20,
    icon: require('../assets/products/icons/frappuccino.png'),
    image: require('../assets/products/images/mochafrapp.jpg'),
    description: "Frappuccino "
  },
  {
    id: 139,
    name: "Chocolate (Small)",
    price: 15,
    icon: require('../assets/products/icons/frappuccino.png'),
    image: require('../assets/products/images/chocolatefrapp.jpg'),
    description: "Frappuccino "
  },
  {
    id: 140,
    name: "Chocolate (Large)",
    price: 20,
    icon: require('../assets/products/icons/frappuccino.png'),
    image: require('../assets/products/images/chocolatefrapp.jpg'),
    description: "Frappuccino "
  },
  {
    id: 141,
    name: "Coffee (Small)",
    price: 15,
    icon: require('../assets/products/icons/frappuccino.png'),
    image: require('../assets/products/images/coffeefrapp.jpeg'),
    description: "Frappuccino "
  },
  {
    id: 142,
    name: "Coffee (Large)",
    price: 20,
    icon: require('../assets/products/icons/frappuccino.png'),
    image: require('../assets/products/images/coffeefrapp.jpeg'),
    description: "Frappuccino "
  },
  {
    id: 143,
    name: "Caramel (Small)",
    price: 15,
    icon: require('../assets/products/icons/frappuccino.png'),
    image: require('../assets/products/images/caramelfrapp.jpg'),
    description: "Frappuccino "
  },
  {
    id: 144,
    name: "Caramel (Large)",
    price: 20,
    icon: require('../assets/products/icons/frappuccino.png'),
    image: require('../assets/products/images/caramelfrapp.jpg'),
    description: "Frappuccino "
  },
  {
    id: 145,
    name: "Flan (Small)",
    price: 10,
    icon: require('../assets/products/icons/dessert.png'),
    image: require('../assets/products/images/flan.jpg'),
    description: "Dessert"
  },
  {
    id: 146,
    name: "Flan (Large)",
    price: 20,
    icon: require('../assets/products/icons/dessert.png'),
    image: require('../assets/products/images/flan.jpg'),
    description: "Dessert"
  },
  {
    id: 147,
    name: "Trifle (Small)",
    price: 10,
    icon: require('../assets/products/icons/dessert.png'),
    image: require('../assets/products/images/trifle.jpg'),
    description: "Dessert"
  },
  {
    id: 148,
    name: "Trifle (Large)",
    price: 20,
    icon: require('../assets/products/icons/dessert.png'),
    image: require('../assets/products/images/trifle.jpg'),
    description: "Dessert"
  },
  {
    id: 149,
    name: "Mousse Panna Cotta (Small)",
    price: 10,
    icon: require('../assets/products/icons/dessert.png'),
    image: require('../assets/products/images/moussepannacotta.jpg'),
    description: "Dessert"
  },
  {
    id: 150,
    price: 20,
    icon: require('../assets/products/icons/dessert.png'),
    image: require('../assets/products/images/moussepannacotta.jpg'),
    name: "Mousse Panna Cotta (Large)",
    description: "Dessert"
  },
  {
    id: 151,
    name: "Ensalada Fria (Small)",
    price: 10,
    icon: require('../assets/products/icons/dessert.png'),
    image: require('../assets/products/images/ensaladafria.jpg'),
    description: "Dessert"
  },
  {
    id: 152,
    name: "Ensalada Fria (Large)",
    price: 20,
    icon: require('../assets/products/icons/dessert.png'),
    image: require('../assets/products/images/ensaladafria.jpg'),
    description: "Dessert"
  },
  {
    id: 153,
    name: "American Pancakes",
    price: 15,
    icon: require('../assets/products/icons/dessert.png'),
    image: require('../assets/products/images/americanpancakes.jpg'),
    description: "Dessert"
  },
  {
    id: 154,
    name: "Muffins",
    price: 20,
    icon: require('../assets/products/icons/dessert.png'),
    image: require('../assets/products/images/muffins.jpg'),
    description: "Dessert"
  },
  {
    id: 155,
    name: "Sandwiches",
    price: 20,
    icon: require('../assets/products/icons/dessert.png'),
    image: require('../assets/products/images/sandwich.jpg'),
    description: "Dessert"
  },
];
export function getProducts() {
  return PRODUCTS;
}
export function getProduct(id) {
  return PRODUCTS.find((product) => (product.id == id));
}