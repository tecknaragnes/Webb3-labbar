const numbers = [1, 5, 21, 2, 0, 26, 0, 2, 18];
const firstEven = numbers.find(n => n % 2 === 0);
console.log("Första jämna:", firstEven);
const overFifty = numbers.find(n => n > 50);
console.log("Första talet över 50:", overFifty);

const cities = ["Calcutta", "Seoul", "Växjö", "Kyoto", "Stockholm", "Östersund", "Ottawa"];
const startsWithS = cities.find(city => city.startsWith("S"));
console.log("Börjar med S:", startsWithS);
const includesÖ = cities.find(city => city.includes("Ö"));
console.log("Innehåller bokstaven Ö:", includesÖ);


const books = [
    {
        title: "A Game of Thrones",
        author: "George R. R. Martin",
        year: 1996,
        pages: 835
    },
    {
        title: "Storm Front",
        author: "Jim Butcher",
        year: 2000,
        pages: 372
    },
    {
        title: "The Lost Metal",
        author: "Brandon Sanderson",
        year: 2022,
        pages: 507
    },
    {
        title: "The Saints of Salvation",
        author: "Peter F. Hamilton",
        year: 2020,
        pages: 576
    },
    {
        title: "A Catalogue for the End of Humanity",
        author: "Timothy Hickson",
        year: 2023,
        pages: 230
    }
]
const GoT = books.find(book => book.title === "A Game of Thrones");
const after2000s = books.find(book => book.year > 2000);
const bigBook = books.find(book => book.pages > 500);
console.log(GoT);
console.log(after2000s);
console.log(bigBook);
const mystery = books.find(book => book.title === "Dracula");
if (mystery === undefined) {
    console.log("Dracula hittades inte");
} else {
    console.log(mystery.title);
}


class Product {
    #id;
    #name;
    #price;
    #inStock;
    constructor(id, name, price, inStock) {
        this.#id = id;
        this.#name = name;
        this.#price = price;
        this.#inStock = inStock;
    }
    get id() {
        return this.#id;
    }
    get name() {
        return this.#name;
    }
    get price() {
        return this.#price;
    }
    get inStock() {
        return this.#inStock;
    }
    get isExpensive() {
        return this.#price > 500;
    }
}

const products = [
    new Product("nr1", "Musmatta", 679, true),
    new Product("nr2", "Nintendo Switch", 3599, false),
    new Product("nr3", "Minneskort", 149, true),
    new Product("nr4", "CD-skiva", 199, true),
    new Product("nr5", "Tangenbord", 499, true),
    new Product("nr6", "Tejp", 69, false)
];
const nr3 = products.find(product => product.id === "nr3");
const notInStock = products.find(product => product.inStock === false);
const expensive = products.find(product => product.isExpensive);
console.log(nr3);
console.log(notInStock);
console.log(expensive);

const div = document.createElement("div");
const body = document.querySelector("body");
body.append(div);
div.innerHTML = `<h2>${nr3.name}</h2>
<p>Pris: ${nr3.price} kr</p>
<p>${nr3.inStock ? "Finns i lager" : "Tillfälligt slut"}</p>`;