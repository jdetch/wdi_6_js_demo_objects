var carLot = {
  name: "Honest Tom's Used Cars",
  cars: [],
  addCar: function(car) {
    this.cars.push(car);
  },
  display: function() {
    var i = 0, displayStr = '';
    for(i; i <this.cars.length; i++) {
      displayStr = displayStr + "\n" + this.cars[i].display();
    }
    return displayStr;
  },
  totalValue: function() {
    var i = 0, total = 0.0;
    for(i; i < this.cars.length; i++) {
      total = total + this.cars[i].price;
    }
    return total;
  }
};

carLot.addCar(car1);
carLot.addCar(car2);
carLot.addCar(car3);


// console.log(car1.display() + " price = " + car1.price );
// console.log(car2.display() + " price = " + car2.price );
// console.log(car3.display() + " price = " + car3.price );

console.log("All cars at " + carLot.name);
console.log(carLot.display());

console.log("Total value of all the cars is " + carLot.totalValue());
