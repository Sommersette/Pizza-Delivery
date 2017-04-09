// Create a pizza object constructor with properties for toppings and size.
// Create a prototype method for the cost of a pizza depending on the selections chosen. Use your own formula for this.
//_________________________________

// BACKEND //


function Order(address, pizza) {
  this.address = [];
  this.pizza = [];
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
//for each branch id dining take away or delivery options

//objext manipulation

$(document).ready(function() {

  $("#dining").click(function(event) {
  event.preventDefault();
    var inOrOut = $("input:radio[name=dining]:checked").val();
    if (inOrOut === "#delivery") {
      $("#address").show();
      $("#dining").hide();
    } else {
      $("#address, #dining").hide();
      $("#orderscreen").show();
    }
  });

  $("#address").submit(function(event){
    event.preventDefault();
    var addressForm = $("#address")
    $("#address").hide();
    $("#orderscreen").show();
  });


  $("#size").change(function(event){
  event.preventDefault();
  var pizzaSize =  $("input:radio[name=size]:change").val();
  if (size === large) {
    $("#small").hide();
    $("#medium").hide();
    $("#large").show();
    $("#sizes").hide();
  } else if (size === medium) {
    $("#small").hide();
    $("#medium").show();
    $("#large").hide();
    $("#sizes").hide();
  } else {
    $("#small").show();
    $("#medium").hide();
    $("#large").hide();
    $("#sizes").hide();
  }
});

  $("#toppings").change(function(event){
    event.preventDefault();
    var delicious = $("input:checkbox[name=toppings]:checked").val(':checked');
    $("Cheese").toggle("#cheese");
    $("Artichoke").toggle("#artichokes");
    $("Mushroom").toggle("#mushooms");
    $("Pepperoni").toggle("#pepperoni");
    $("Anchovy").toggle("#anchovies");

  });

});
