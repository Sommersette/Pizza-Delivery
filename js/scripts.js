// Create a pizza object constructor with properties for toppings and size.
// Create a prototype method for the cost of a pizza depending on the selections chosen. Use your own formula for this.
//_________________________________

// BACKEND //

//foreach branch id dining take away or delivery options

function Order(address, pizza) {
  this.address[];
  this.pizza[];
}

function Address(name, street, state, zip) {
  this.name = name;
  this.street = street;
  this.city = state;
  this.zip = zip;
}

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;

}

Order.prototype.finalOrder = function(){
  return this.address + ", " + this.pizza;
}

Address.prototype.fullAddress = function() {
  return this.name + ", " + this.street + ", " + this.city, + ", " + this.zip;
}

Pizza.prototype.pizzaOrder = function() {
  return this.size + ", " + this.toppings;
}
// FRONT END //

$(document).ready(function() {
  $("").click(function() {

  });
});
