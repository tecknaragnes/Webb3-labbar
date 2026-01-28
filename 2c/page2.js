let message = localStorage.getItem("animal");
console.log(message);

const removeBtn = document.getElementById("remove");
removeBtn.addEventListener("click", function () {
    localStorage.removeItem("animal");
    // console.log(message);
    console.log("Djur borttaget");
});