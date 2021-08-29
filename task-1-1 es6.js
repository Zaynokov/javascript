class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {
        this.price *= 0.75;
        alert(this.price);
    }
}

let newProduct = new Product('Барабаны', 130000);
newProduct.make25PercentDiscount();