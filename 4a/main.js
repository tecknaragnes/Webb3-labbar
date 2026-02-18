class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
}

const carRenault = new Car("Renault", "Megane", 2009);
const carCitroen = new Car("Citroen", "Megabrega", 2025);
const carVolvo = new Car("Volvo", "240", 1975);

console.log(carRenault.brand, carRenault.year);
console.log(carCitroen.brand, carCitroen.year);
console.log(carVolvo.brand, carVolvo.year);


class BankAccount {
    constructor(owner, balance = 0) {
        this.owner = owner;
        this.balance = balance;
        this.currency = "SEK";
    }
}

const account1 = new BankAccount("Agnes", 10000);
const account2 = new BankAccount("Alice");

console.log(account1.owner, account1.balance, account1.currency);
console.log(account2.owner, account2.balance, account2.currency);


class Movie {
    constructor(title, director, rating) {
        this.title = title;
        this.director = director;
        this.rating = rating;
    }
}

const movies = [
    new Movie("A New Hope", "George Lucas", 8),
    new Movie("Rogue One", "Tony Gilroy", 8),
    new Movie("Wake Up Dead Man", "Ryan Johnson", 9),
    new Movie("Catch Me if You Can", "Stephen Spielberg", 9)
]

const section = document.querySelector("section");
const ul = document.createElement("ul");
section.after(ul);
for (const movie of movies) {
    console.log(`${movie.title}: ${movie.rating}/10`);
    const li = document.createElement("li");
    li.innerHTML = `${movie.title}: ${movie.rating}/10`;
    ul.append(li);
}