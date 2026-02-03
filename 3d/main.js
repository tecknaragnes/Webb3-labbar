const header2 = document.createElement("h2");
header2.textContent = "Min första createElement.";
console.log(header2);
const main = document.querySelector("main");
main.append(header2);

const paragraph = document.createElement("p");
paragraph.classList.add("description");
paragraph.textContent = "Hejsan svejsan, idag fyller min pappa år!";
console.log(paragraph);
main.append(paragraph);

const button = document.createElement("button");
button.textContent = "Klicka mig";
button.addEventListener("click", () => {
    console.log("Klickad!");
    const element = document.createElement("span");
    element.textContent = "Before! ";
    button.before(element);
    createCard("The Chosen", "En karaktär som Shayne från Smosh har skapat.")
});
console.log(button);
main.append(button);

const createCard = (title, description) => {
    const article = document.createElement("article");
    article.classList.add("card");
    const header3 = document.createElement("h3");
    header3.textContent = title;
    const desc = document.createElement("p");
    desc.textContent = description;
    main.append(article);
    article.prepend(header3);
    header3.after(desc);
}


const users = [
    { name: 'Anna', role: 'Admin' },
    { name: 'Erik', role: 'User' },
    { name: 'Maria', role: 'User' }
];

function renderUsers(users) {
    const container = document.querySelector('#user-list');
    // Rensa befintligt innehåll
    container.innerHTML = '';
    for (const user of users) {
        const div = document.createElement('div');
        div.classList.add('user-card');

        const name = document.createElement('h3');
        name.textContent = user.name;

        const role = document.createElement('span');
        role.textContent = user.role;
        role.classList.add('role', user.role.toLowerCase());

        div.append(name, role);
        container.append(div);

        const btn = document.createElement("button");
        btn.textContent = "Ta bort användare";
        btn.classList.add("removeBtn");
        div.append(btn);
        const removeBtn = document.querySelector(".removeBtn");
        removeBtn.addEventListener("click", () => {
            div.remove();
        }); // jag får inte knappen att funka...
    }
}
renderUsers(users);

const fullList = document.querySelector("ul");
const taskInput = document.querySelector("input");
const addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", () => {
    // console.log(taskInput.value);
    const task = document.createElement("li");
    task.textContent = taskInput.value;
    fullList.append(task);
    taskInput.value = "";
    const removeTask = document.createElement("button");
    removeTask.textContent = "X";
    task.append(removeTask);
    removeTask.addEventListener("click", () => {
        task.remove();
    })
})