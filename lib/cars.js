var car1 = {
  make: toyota,
  model: 'Corolla',
  year: 2007,
  price: 300.00,
  display: function() {
    return  "The make is " + toyota.display() + ", the model is " + this.model + " the price is $" + this.price + " and the year is " + this.year;
  }
};

var car2 = {

  make: ford,
  model: 'Mustang',
  year: 2004,
  price: 100.00,
  display: function() {
    return  "The make is " + ford.display() + ", the model is " + this.model + " the price is $" + this.price + " and the year is " + this.year;
  }
};

var car3 = {
  make: dodge,
  model: 'Charger',
  year: 1969,
  price: 200.00,
  display: function() {
    return  "The make is " + dodge.display() + ", the model is " + this.model + " the price is $" + this.price + " and the year is " + this.year;
  }
};
