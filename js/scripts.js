// Create a pizza object constructor with properties for toppings and size.
// Create a prototype method for the cost of a pizza depending on the selections chosen. Use your own formula for this.
//_________________________________

// BACKEND //

//foreach branch id dining take away or delivery options

function Order {
  this.address[];
  this.pizza[];
}

function Address {
  this.name = name;
  this.street = street;
  this.city = state;
  this.zip = zip;
}

function Pizza {
  this.size = size;
  this.toppings = toppings;

}

Order.prototype.finalOrder (){
  return this.address + " " + this.pizza
}

Address.prototype {
  return this.name + " " + this.street + " " + this.city, + " " + this.zip
}
// FRONT END //
