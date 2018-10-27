var Grocery = /** @class */ (function () {
    function Grocery(name, price, quanity) {
        this.name = name;
        this.price = price;
        this.quanity = quanity;
        this.name;
        this.price;
        this.quanity;
    }
    return Grocery;
    
}());
var items = [];
var prices = [];
var quanity = [];
var listItem = function (Grocery) {
    items.push(Grocery.name);
    prices.push(Grocery.price);
    quanity.push(Grocery.quanity);
};
var milk = new Grocery("Milk", 2.99, 1);
var eggs = new Grocery("Eggs", 2.45, 12);
var pancakes = new Grocery("Pancakes Mix", 3.06, 1);
listItem(milk);
listItem(eggs);
listItem(pancakes);
var domItems = items.map(function (list) {
    return "" + list;
});
var domPrice = prices.map(function (price) {
    return "" + price;
});
var domQuanity = quanity.map(function (quanity) {
    return "" + quanity;
});
document.body.innerHTML = "<h1></h1> Grocery items and price </h1><p>" + domItems[0] + " : Price $" + domPrice[0] + " - Quanity " + domQuanity[0] + " </p><p>" + domItems[1] + " : $" + domPrice[1] + " - Quanity " + domQuanity[1] + "  </p><p>" + domItems[2] + " : $" + domPrice[2] + " - Quanity " + domQuanity[2] + " </p>  ";
