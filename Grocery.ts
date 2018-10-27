class Grocery {
  constructor(
    public name: string,
    public price: number,
    public quanity: number
  ) {
    this.name;
    this.price;
    this.quanity;
  }
}

let items = [];
let prices = [];
let quanity = [];

const listItem = (Grocery: Grocery) => {
  items.push(Grocery.name);
  prices.push(Grocery.price);
  quanity.push(Grocery.quanity);
};

let milk = new Grocery("Milk", 2.99, 1);
let eggs = new Grocery("Eggs", 2.45, 12);
let pancakes = new Grocery("Pancakes Mix", 3.06, 1);

listItem(milk);
listItem(eggs);
listItem(pancakes);

let domItems = items.map(list => {
  return `${list}`;
});
let domPrice = prices.map(price => {
  return `${price}`;
});
let domQuanity = quanity.map(quanity => {
  return `${quanity}`;
});

document.body.innerHTML = `<h1></h1> Grocery items and price </h1><p>${
  domItems[0]
} : Price $${domPrice[0]} - Quanity ${domQuanity[0]} </p><p>${domItems[1]} : $${
  domPrice[1]
} - Quanity ${domQuanity[1]}  </p><p>${domItems[2]} : $${
  domPrice[2]
} - Quanity ${domQuanity[2]} </p>  `;
