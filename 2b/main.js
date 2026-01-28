const car = {
    brand: "Volvo",
    model: "V40",
    year: 2018,

    getDescription: function () {
        return this.year + " " + this.brand + " " + this.model;
    },

    honk() {
        console.log("Tut tut!");
    }
};

console.log(car.getDescription());
car.honk();

const counter = {
    value: 0,

    increase() {
        this.value++;
    },

    decrease() {
        this.value--;
    },

    reset() {
        this.value = 0;
    }
};

counter.increase();
counter.increase();
counter.decrease();
counter.reset();


const valueBox = document.getElementById("valueBox");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");

valueBox.textContent = counter.value;
increaseBtn.addEventListener("click", function () {
    counter.increase();
    valueBox.textContent = counter.value;
});
decreaseBtn.addEventListener("click", function () {
    counter.decrease();
    valueBox.textContent = counter.value;
});
resetBtn.addEventListener("click", function () {
    counter.reset();
    valueBox.textContent = counter.value;
});
