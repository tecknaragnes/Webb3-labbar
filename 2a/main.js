const person = {
    firstName: "Cassian",
    lastName: "Andor",
    age: 30,
    occupation: "rebel",
    adress: {
        street: "Brick road",
        city: "Ferrix city",
        country: "Ferrix"
    }
};

console.log(person);
console.log(person.firstName);
console.log(person["lastName"]);

const show = {
    title: "Andor",
    firstAired: 2022,
    isOngoing: false,
    characters: [
        "Andor",
        "Luthen",
        "Mon Mothma"
    ],
    creator: {
        company: "Disney+",
        writer: "Tony Gilroy"
    }
};

person.hobby = "flying";
person.age = 33;
delete person.occupation;
console.log("Har Andor ett jobb?", "occupation" in person);
console.log(person);

const div1 = document.getElementById("div1");
const andorChar = show.characters.join(", ");
for (const key in person) {
    console.log(key, person[key]);
}

div1.innerHTML = `
<h2>${show.title}</h2>
<p>Made by ${show.creator.company} and written by ${show.creator.writer}</p>
<p>In this show we meet characters like ${show.characters[0]}, ${show.characters[1]} and ${show.characters[2]}.</p>
`;