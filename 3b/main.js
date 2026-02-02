// const responsePromise = fetch("message.txt");
// console.log(responsePromise);
// const textPromise = responsePromise.then(response => {
//     console.log(response);
//     return response.text();
// });
// textPromise.then(text => {
//     document.querySelector("main").textContent = text;
// });

// fetch("message.txt") //detta är ett tajtare och enklare sätt att skriva samma som kodraderna ovan
//     .then(response => response.text())
//     .then(text => {
//         document.querySelector("main").textContent = text;
//     });

fetch("message.txt")
    .then(response => {
        console.log(response);
        console.log("Status: ", response.status);
        console.log("OK? ", response.ok);
        console.log("URL: ", response.url);
        return response.text();
    })
    .then(text => {
        console.log("Innehåll: ", text);
    });

fetch("data.json")
    .then(response => {
        console.log(response);
        console.log("Status: ", response.status);
        console.log("OK? ", response.ok);
        console.log("URL: ", response.url);
        return response.json();
    })
    .then(data => {
        console.log("Innehåll: ", data);
        console.log(data.title);
        console.log(data.items[2]);
    });

const response = await fetch("message.txt");
const text = await response.text();
document.querySelector("main").textContent = text;