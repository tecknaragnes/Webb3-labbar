import { labbar } from "./labbar.js";
console.log(labbar);

const createCards = (labbar) => {
    const nav = document.querySelector("nav");

    for (let week of labbar) {
        const liWeek = document.createElement("li"); //skapa listelement per vecka
        console.log(liWeek);
        // console.log(week);
        const h2WeekTitle = document.createElement("h2");
        //rubrik för varje vecka
        for (let labb of week) { //fast nu blir det ju fel antal veckor etc
            // console.log("labb " + labb); //nu blir labbarna object object (läste omd et ngnstans?)
            const section = document.createElement("section");
            //lägg in länken i sektionen istället för rubriken, större klick-yta
            const h3 = document.createElement("h3");
            h3.innerHTML = `<a href="${labb.link}"> ${labb.complete ? "✔️" : "⏳"} ${labb.id}</a>`;
            console.log(h3); //nu blir allt med "week" undefined

        }
    }

};

createCards(labbar);