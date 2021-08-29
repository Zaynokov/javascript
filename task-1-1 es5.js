function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function () {
    this.price *= 0.75;
    alert(this.price);
};

let newProduct = new Product('Гитара', 23000);
newProduct.make25PercentDiscount();