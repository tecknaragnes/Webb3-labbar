const response = await fetch("menu.json");
const menu = await response.json();

// fetch("menu.json")
//     .then(response => {
//         console.log(response);
//         console.log("Status: ", response.status);
//         console.log("OK? ", response.ok);
//         console.log("URL: ", response.url);
//         return response.json();
//     })
//     .then(menu => {
console.log(menu);
console.log("Restaurangens namn: ", menu.name);
console.log("Antal kategorier: ", menu.categories.length);
console.log(menu.categories[1].dishes[0].name);
// })