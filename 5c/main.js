//-------------------------------------------
const numbers = [1, 2, 3, 4, 5, 8, 10, 13, 15, 16];
console.log(numbers);
const squared = numbers.map(x => x * x);
console.log(squared);
const string = numbers.map(x => `Tal: ${x}`);
console.log(string);


//-------------------------------------------
const animals = ["Hund", "Katt", "Häst", "Orm", "Råtta", "Oxe", "Gris", "Tiger", "Kanin", "Drake", "Get", "Apa", "Tupp"];
const lowerCase = animals.map(a => a[0].toLowerCase() + a.slice(1));
console.log(lowerCase);
const upperCase = animals.map(a => a.toUpperCase());
console.log(upperCase);
const letters = animals.map(a => `${a} (${a.length} tecken)`);
console.log(letters);


//-------------------------------------------
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

const titles = books.map(book => book.title);
console.log(titles);
const readingTime = books.map(b => ({ title: b.title, readingTime: Math.ceil(b.pages / 30) }));
console.log(readingTime);


//-------------------------------------------
const zooAnimals = [
    { name: "Gösta", species: "Pingvin", age: 4, weight: 5, habitat: "Arktis" },
    { name: "Barbro", species: "Elefant", age: 32, weight: 4200, habitat: "Savann" },
    { name: "Sansen", species: "Papegoja", age: 67, weight: 1, habitat: "Regnskog" },
    { name: "Doris", species: "Sköldpadda", age: 104, weight: 80, habitat: "Savann" },
    { name: "Bengt-Åke", species: "Pingvin", age: 2, weight: 4, habitat: "Arktis" },
    { name: "Sigrid", species: "Flodhäst", age: 18, weight: 1800, habitat: "Savann" },
    { name: "Margit", species: "Papegoja", age: 12, weight: 1, habitat: "Regnskog" },
    { name: "Knansen", species: "Krokodil", age: 45, weight: 450, habitat: "Regnskog" }
];

const savanna = zooAnimals
    .filter(a => a.habitat === "Savann")
    .map(a => a.name);
console.log("Djur i savannen:", savanna);

const smallAnim = zooAnimals
    .filter(a => a.weight < 10)
    .map(a => `${a.name} (${a.species}, ${a.age} år)`);
console.log("Små djur:", smallAnim);

const oldAnim = zooAnimals
    .filter(a => a.age > 20)
    .map(a => `🏆 ${a.name}, ${a.species} - ${a.age} år`);
console.log("Gamla djur:", oldAnim);

const contSav = document.getElementById("savanna");
const contSmall = document.getElementById("small");
const contOld = document.getElementById("old");

const savH2 = document.createElement("h2");
savH2.textContent = "Djur i savannen";
const savList = document.createElement("ul");
contSav.append(savH2, savList);
for (let a of savanna) {
    const li = document.createElement("li");
    li.textContent = a;
    savList.append(li);
}

const smallH2 = document.createElement("h2");
smallH2.textContent = "Små djur";
const smallList = document.createElement("ul");
contSmall.append(smallH2, smallList);
for (let a of smallAnim) {
    const li = document.createElement("li");
    li.textContent = a;
    smallList.append(li);
}

const oldH2 = document.createElement("h2");
oldH2.textContent = "Gamla djur";
const oldList = document.createElement("ul");
contOld.append(oldH2, oldList);
for (let a of oldAnim) {
    const li = document.createElement("li");
    li.textContent = a;
    oldList.append(li);
}

