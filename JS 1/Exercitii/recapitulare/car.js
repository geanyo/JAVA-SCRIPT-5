class Car {
    constructor(make, model, year, color, maxSpeed) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.maxSpeed = maxSpeed;
        this.started = false;
        this.mileage = 0;
    }
    drive(distance) {
        this.mileage += distance;
    }
    start() {
        this.started = true;
    }
    stop() {
        this.started = false;
    }
}


var myFord= new Car("Ford", "Mondeo", 2016, "red", 200);
var myNationalCar= new Car("Opel", "Astra", 2020, "blue", 255.2);
myNationalCar.drive(100);

var myCar= {
    make: "Ford",
    model: "GT",
    year: 2020,
    mileage: 1100.5,
    maxSpeed: 300,
    started: false,
    drive: function(distance) {
        this.mileage += distance;
    },
    start: function() {
        this.started= true;
    },
    stop: function() {
        this.started= false;
    }
}
var anotherCar= {
    make: "Opel",
    model: "Bel Air",
    year: 1980,
    mileage: 3450,
    maxSpeed: 180,
    started: true,  
}