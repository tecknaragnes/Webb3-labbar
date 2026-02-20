const book = {
    title: "The Great Gatsby",
    year: 1925,
    isbn: null,
}
console.log(book.title); // "The Great Gatsby"
console.log(book.isbn);
console.log(book.publisher);


let username = null;
let level = 0;
let bio = "";
const displayName = username ?? "Anonym";
const displayLevel = level ?? 1;
const displayBio = bio ?? "Ingen biografi tillgänglig";
console.log("Display name:", displayName);
console.log("Display level:", displayLevel);
console.log("Display bio:", displayBio);


//profiler-------------------------------
const profiles = [
    { name: "Anna", email: "anna@example.com", address: { city: "Uppsala", street: "Svartbäcksgatan 12" } },
    { name: "Erik", email: null, address: { city: "Göteborg" } },
    { name: "Maria", email: "maria@example.com", address: null },
    { name: "Johan" }
]
const createProfileCard = (profiles) => {
    const container = document.getElementById("container");
    const h2 = document.createElement("h2");
    h2.innerText = "Profiler";
    container.append(h2);
    for (const profile of profiles) {
        // console.log("profil");
        const card = document.createElement("div");
        container.append(card);

        const name = document.createElement("h3");
        name.textContent = profile.name ?? "Namn saknas";
        card.append(name);

        const email = document.createElement("p");
        email.textContent = `Email: ${profile.email ?? "Ej angivet"}`;
        card.append(email);

        const phone = document.createElement("p");
        phone.textContent = `Telefonnummer: ${profile.phone ?? "Ej angivet"}`;
        card.append(phone);

        const city = document.createElement("p");
        city.textContent = `Adress: ${profile?.address?.city ?? "Ej angivet"}`;
        card.append(city);

        const street = document.createElement("p");
        street.textContent = profile?.address?.street ?? "Gatuadress ej angivet";
        card.append(street);
    }
}
createProfileCard(profiles);


//Väderprognos--------------------------------
const forecasts = [
    {
        city: "Stockholm",
        temperature: 12,
        description: "Växlande molnighet",
        wind: { speed: 5, direction: "SV" },
        precipitation: 0
    },
    {
        city: "Göteborg",
        temperature: null,
        description: "Regn",
        wind: { speed: 12, direction: null },
        precipitation: 8
    },
    {
        city: "Malmö",
        temperature: 15,
        description: null,
        wind: null,
        precipitation: null
    },
    {
        city: "Kiruna",
        temperature: -3,
        wind: { speed: 2 }
    },
    {
        city: null,
        temperature: 9,
        description: "Soligt",
        wind: { speed: 0, direction: "N" },
        precipitation: 0
    }
];

const createForecastCard = (forecasts) => {
    const container = document.getElementById("container");
    const h2 = document.createElement("h2");
    h2.textContent = "Väderprognoser";
    container.append(h2);

    const cities = forecasts.filter(f => f.city !== null);
    console.log(cities);
    for (const c of cities) {
        const card = document.createElement("div");
        container.append(card);

        const cityH3 = document.createElement("h3");
        cityH3.textContent = c.city;

        const tempP = document.createElement("p");
        const temp = c.temperature ?? null;
        tempP.textContent = temp !== null && temp !== undefined
            ? `Temperatur: ${temp}°C`
            : "Temperatur: Okänd";

        const desc = document.createElement("p");
        desc.textContent = `Väder: ${c.description ?? "Ingen prognos"}`;

        const windP = document.createElement("p");
        const windSpeed = c.wind?.speed ?? null;
        const windDir = c.wind?.direction ?? null;
        windP.textContent = windSpeed !== null && windSpeed !== undefined
            ? `Vind: ${windSpeed} m/s. `
            : "Vind: Okänd hastighet. ";
        windP.textContent += windDir !== null && windDir !== undefined
            ? `Riktning: ${windDir}`
            : `Riktning: Okänd`;

        const precipP = document.createElement("p");
        const percip = c.precipitation ?? null;
        precipP.textContent = percip !== null && percip !== undefined
            ? `Nederbörd: ${percip} mm`
            : `Nederbörd: Ej angivet`;

        card.append(cityH3, tempP, desc, windP, precipP);
    }
}
createForecastCard(forecasts);