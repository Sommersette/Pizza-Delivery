// BACKEND //

function Order(pizza, delivery) {
    this.pizza = [];
    this.delivery = [];
  }

function Pizza(size, toppings) {
    this.size = size;
    this.toppings = toppings;
  }

Pizza.prototype.pizzaOrder = function() {
  return this.size + ", " + this.toppings + "," + this.delivery;
}

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
// FRONT END //


//branching
$(document).ready(function() {

  $("#dining").click(function(event) {
  event.preventDefault();
    var inOrOut = $("input:radio[name=dining]:checked").val();
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

  // var toppings = []
  // $("input:checkbox[name=toppings]:checked")each(function(){  // loop through  each topping with each statement and accrue cost by pushing to an empty array called toppings.
  //   var toppings = $(this).val();
  //   toppings.push(topping);
  // });


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

// toggle toppings and increase  price
// add button clears form/subtotals price and moves item to order description column
// address added to address box in right column
// place order  shows grand total and order screen.


});
