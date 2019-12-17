var car = {
  make: "Ford",
  model: "Mustang",
  year: 2019,
  color: "red",
  passengers: 4,
  mileage: 2000,
  engineIsOn: false,
  stop: function() {
    if (this.engineIsOn) {
      this.engineIsOn = false;
      console.log("Car stopped");
    } else {
      console.log("Car is already stopped");
    }
  },
  start: function() {
    if (!this.engineIsOn) {
      this.engineIsOn = true;
      console.log("Car started");
    } else {
      console.log("Car is already started");
    }
  }
};

console.log(car.year);

car.mileage = 5600;
console.log(car.mileage);

car.start();
car.stop();
car.stop();
