var car = {
  make: "Ford",
  model: "Mustang",
  year: 2019,
  color: "red",
  passengers: 4,
  mileage: 2000,
  engineIsOn: false,
  fuel: 50,
  maxFuel: 50,
  mediumConsumption: 7.5,
  refill: function(num) {
    // num ---- NUMAR DE LITRI si este un PARAMETRU AL FUNCTIEI -----
    if(this.fuel + num > this.maxFuel) {
        this.fuel= this.maxFuel;
        console.log("Too much");
    } else {
        this.fuel += num;
    }
  },
    drive: function(distance) {
        if(this.distanceToEmpty() < distance) {
            console.log("Too far!");
            distance = this.distanceToEmpty();
        }
        consumption= Math.round(distance * this.mediumConsumption / 100);
        this.fuel -= consumption;
        this.mileage += distance;
  },
  distanceToEmpty: function(){
    return Math.round(this.fuel / this.mediumConsumption * 100);
    // return Math.round(this.fuel / this.mediumConsumption * 100); ------ RETURN ESTE REZULTATUL FUNCTIEI si il rotunjeste, este o functie matematica -------
  },
//   INDICATIE SI INTEROGARE

//   stop: function() ----STOP REPREZINTA O FUNCTIE -------
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
console.log(car.year);
console.log(car["mileage"]);

// car.start();
// car.stop();
// car.stop();

car.start();
car.start();

// for(prop in car) {
//     console.log(prop + " = " + car[prop]);
// } -----SE AFISEAZA TOATE PROPRIETATILE -------

car.drive(100);
console.log(car.fuel);
car.drive(800);
console.log(car.fuel);
car.refill(30);
console.log(car.fuel);



// for(proprietate in car) {
//     console.log(proprietate);
// }  -------- AFISEAZA TOATE PROPRIETATILE ---------

