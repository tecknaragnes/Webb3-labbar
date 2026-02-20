const numbers = [1, 5, 21, -2, 0, 26, 0, 2, 18, -51];
const positiveNumbers = numbers.filter(n => n > 0);
const evenNumbers = numbers.filter(n => n % 2 === 0);
console.log("Original-tal:", numbers);
console.log("Positiva tal:", positiveNumbers);
console.log("Jämna tal:", evenNumbers);


const animals = ["Hund", "Katt", "Häst", "Orm", "Råtta", "Oxe", "Gris", "Tiger", "Kanin", "Drake", "Get", "Apa", "Tupp"];
const longerThan5 = animals.filter(a => a.length > 4);
const includesA = animals.filter(a => a.includes("a"));
console.log("Fler än 4 bokstäver:", longerThan5);
console.log("Innehåller bokstaven a:", includesA);
console.log(animals);


const students = [
    {
        name: "Aline",
        age: 27,
        grade: 87
    },
    {
        name: "Axel",
        age: 26,
        grade: 79,
    },
    {
        name: "Zelda",
        age: 22,
        grade: 82,
    },
    {
        name: "Dorf",
        age: 29,
        grade: 63
    },
    {
        name: "Link",
        age: 23,
        grade: 51
    },
    {
        name: "Tingle",
        age: 300,
        grade: 46
    }
]
const passed = students.filter(s => s.grade > 50);
console.log("Godkänd:", passed);
console.log("Antal:", passed.length);
const under25 = students.filter(s => s.age < 25);
console.log("Under 25 år:", under25);
console.log("Antal:", under25.length);


const movies = [
    {
        title: "A New Hope",
        year: 1977,
        genre: "Sci-fi",
        rating: 8
    },
    {
        title: "Rogue One",
        year: 2016,
        genre: "Sci-fi",
        rating: 8
    },
    {
        title: "Wake Up Dead Man",
        year: 2025,
        genre: "Murder mystery",
        rating: 9
    },
    {
        title: "Catch Me if You Can",
        year: 1999,
        genre: "Coming-of-age",
        rating: 9
    },
    {
        title: "Bugonia",
        year: 2025,
        genre: "Thriller",
        rating: 7
    },
    {
        title: "A Vengance Most Fowl",
        year: 2024,
        genre: "Comedy",
        rating: 8
    },
    {
        title: "The Roses",
        year: 2025,
        genre: "Satire",
        rating: 7
    },
    {
        title: "Mr. Nobody Against Putin",
        year: 2025,
        genre: "Documentary",
        rating: 10
    }
]

const container = document.getElementById("container");
const displayMovies = (movieList) => {
    container.innerHTML = "";

    const filterBtn1 = document.getElementById("scifi");
    const filterBtn2 = document.getElementById("highRated");
    const filterBtn3 = document.getElementById("pre00s");
    const resetFilter = document.getElementById("reset");

    const list = document.createElement("ul");
    container.append(list);
    for (let movie of movieList) {
        const listItem = document.createElement("li");
        listItem.textContent = `${movie.title} (${movie.year}) - ${movie.genre} - ${movie.rating}/10`;
        list.append(listItem);
    }

    const sciFiFilter = movies.filter(m => m.genre === "Sci-fi");
    const ratingFilter = movies.filter(m => m.rating >= 8);
    const yearFilter = movies.filter(m => m.year < 2000);

    filterBtn1.addEventListener("click", () => displayMovies(sciFiFilter));
    filterBtn2.addEventListener("click", () => displayMovies(ratingFilter));
    filterBtn3.addEventListener("click", () => displayMovies(yearFilter));
    resetFilter.addEventListener("click", () => displayMovies(movies));
}

displayMovies(movies);