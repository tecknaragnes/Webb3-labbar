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
        return value++;
    },

    decrease() {
        value--;
    },

    reset() {
        value = 0;
    }
};

counter.increase();