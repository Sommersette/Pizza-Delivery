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

function //push to this object with conditional for each topping and do one for size as  well based on the length of each array that it is for. 

// FRONT END //

//objext manipulation


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

  var toppings = []
  $("input:checkbox[name=toppings]:checked")each(function(){  // loop through  each topping with each statement and accrue cost by pushing to an empty array called toppings.
    var toppings = $(this).val();
    toppings.push(topping);
  });


// var result = function(){
//   types.forEach(function(type){
//     $(`input:checkbox[name=${type}-toppings]:checked`).each(function(event){
//       event.preventDefault();
//       var toppings = $(this).val();
//       $(`#{type}-checkbox`).toggle();
//       });
//     });
//   });

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
