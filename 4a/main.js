class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
}

const carRenault = new Car("Renault", "Megane", 2009);
const carCitroen = new Car("Citroen", "Megabrega", 2025);
const carVolvo = new Car("Volvo", "240", 1975);

console.log(carRenault.brand, carRenault.year);
console.log(carCitroen.brand, carCitroen.year);
console.log(carVolvo.brand, carVolvo.year);