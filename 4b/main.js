class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
    getPerimeter() {
        return this.width * 2 + this.height * 2;
    }
    describe() {
        return `Rektangel: ${this.width} * ${this.height} (area: ${this.getArea()}, omkrets: ${this.getPerimeter()})`
    }
}

const r1 = new Rectangle(8, 3);
const r2 = new Rectangle(25, 2);

console.log(r1.getArea());
console.log(r1.describe());


class ShoppingCart {
    constructor() {
        this.items = [];
    }
    addItem(item) {
        this.items.push({ name: item, quantity: 1 });
    }
    getTotal() {
        let total = 0;
        for (const item of this.items) {
            total += item.quantity;
        }
        return total;
    }
    listItems() {
        for (const item of this.items) {
            console.log(`${item.name}: ${item.quantity} st`);
        }
    }
}

const cart = new ShoppingCart();
cart.addItem("Äpple");
cart.addItem("Bröd");
cart.addItem("Fil")
// cart.addItem("Äpple");
cart.listItems();
console.log("Totalt antal:", cart.getTotal());


class Clicker {
    constructor() {
        this.count = 0;
    }
    setup() {
        const clickBtn = document.querySelector("button");
        const clickCounter = document.getElementById("clickCounter");
        clickBtn.addEventListener("click", () => {
            this.count++;
            console.log("Du klickade");
            clickCounter.innerText = `Antal klick: ${this.count}`;
        });
    }
}

const clicker = new Clicker();
clicker.setup();