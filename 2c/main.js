localStorage.setItem("animal", "cat");


//spara namn--------------------------------------------
const nameInput = document.getElementById("nameInput");

const savedName = localStorage.getItem("name");
if (savedName) {
    nameInput.value = savedName;
}

nameInput.addEventListener("input", function () {
    localStorage.setItem("name", nameInput.value);
});

document.getElementById("remove").addEventListener("click", function () {
    if (savedName) {
        localStorage.removeItem("name");
    }
});


//temaval---------------------------------------------------
const themeBtns = document.querySelectorAll("input[name='theme']");
const personify = document.getElementById("personify");
let currentTheme = "original";
if (localStorage.getItem("selectedTheme")) {
    currentTheme = localStorage.getItem("selectedTheme");
};

personify.className = currentTheme + "-theme";
document.querySelector(`input[value="${currentTheme}"]`).checked = true;

themeBtns.forEach(radio => {
    radio.addEventListener("change", function () {
        localStorage.setItem("currentTheme", this.value);
        personify.className = this.value + "-theme";
    });
});