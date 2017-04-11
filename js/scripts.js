// BACKEND //

function grandTotal(order, address) {
  this.order = [];
  this.address = [];
}

function Order(pizza, toppings, delivery) {
    this.size = size;
    this.toppings = toppings;
    this.delivery = delivery;
  }

  // function Address(street, city, state, zip) {
  //   this.street = street;
  //   this.city = city;
  //   this.state = state;
  //   this.zip = zip;
  // }

Order.prototype.pizzaOrder = function() {
  return this.size + ", " + this.toppings + "," + this.delivery;
}

// Address.prototype.fulladdress = function() {
//   return this.street + ", " + this.city + ", " + this.state + "," + this.zip;
// }

//push to this object with conditional for each topping and do one for size as well based on the length of each array that it is for.
function grandTotal(size, toppings, delivery) {
  if (size === "small") {
    var sizePrice = 10;
  } else if (size === "medium"){
    var sizePrice = 12;
  } else if (size === "large") {
    sizePrice = 14;
  } else if (toppings.length === 5) {
    toppingPrice = 6.25;
  } else if (toppings.length === 4) {
    toppingPrice = 5.00;
  } else if (toppings.length === 3) {
      toppingPrice = 3.75;
  } else if (toppings.length === 2) {
    toppingPrice = 2.50;
  } else if (toppings.lenght === 1){
    toppingsPrice = 1.25;
  } else if (delivery === true) {
    deliveryPrice = 2.00;
  }
  subtotal = (sizePrice+toppingPrice+deliveryPrice);
  return subtotal;
}

  function returnGrandTotal() {
    grandTotal.push(parseFloat(subtotal));
  }

    function grandOrder() {
      var toPrice = 0;
      grandTotal.forEach(function(price){
        toPrice += price;
      })
        return toPrice;
    }

//////////////////////// FRONT END ///////////////////////////////


//branching
$(document).ready(function() {

  $("#dining").click(function(event) {
  event.preventDefault();
  var delivery = []
    var inOrOut = $("input:radio[name=dining]:checked").val();
    var delivery = $(this).val();
    delivery.push(delivery);
    if (inOrOut === "delivery") {
      $("#address").show();
      $("#dining").hide();
    } else {
      $("#address, #dining").hide();
      $("#orderscreen, footer").show();
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
  var Size = []
  var size =  $("input:radio[name=size]:checked").val();
  if (size === "large") {
    $("#small").hide();
    $("#medium").hide();
    $("#large").show();
    $("#sizes").hide();
    $("#crust").show();
    $("#toppings").show();
    //price: append DOM #pizzadescription <ul><li></li></ul>
  } else if (size === "medium") {
    $("#small").hide();
    $("#medium").show();
    $("#large").hide();
    $("#sizes").hide();
    $("#crust").show();
    $("#toppings").show();

    //price: append DOM #pizzadescription <ul><li></li></ul>
  } else {
    $("#small").show();
    $("#medium").hide();
    $("#large").hide();
    $("#sizes").hide();
    $("#crust").show();
    $("#toppings").show()

    //price: append DOM #pizzadescription <ul><li></li></ul>
  }
});

  $("#cheeseCheck").change(function(){
    $("#cheese").toggle();
  });

  $("#pepperoniCheck").change(function(){
    $("#pepperoni").toggle();
  });

  $("#artichokeCheck").change(function(){
    $("#artichokes").toggle();
  });

  $("#anchovyCheck").change(function(){
    $("#anchovy").toggle();
  });

  $("#mushroomCheck").change(function(){
    $("#mushrooms").toggle();
  });

  

  // function resetForm() {
  //   $("input#cheese").val("");
  //   $("input#pepperoni").val("");
  //   $("input#anchovy").val("");
  //   $("input#artichokes").val("");
  //   $("input#size").val("");
  //   $(input"#mushrooms").val("");
  // }
  // resetForm
  //(so  can  add extra  pizzas.)
  // add button clears form/subtotals price and moves item to order description column
  // address added to address box in right column
  // place order shows grand total and order screen.


});
