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
  var size =  $("input:radio[name=size]:checked").val();
  if (size === "large") {
    $("#small").hide();
    $("#medium").hide();
    $("#large").show();
    $("#sizes").hide();
    $("#crust").show();
    //price: append DOM #pizzadescription <ul><li></li></ul>
  } else if (size === "medium") {
    $("#small").hide();
    $("#medium").show();
    $("#large").hide();
    $("#sizes").hide();
    $("#crust").show();
    //price: append DOM #pizzadescription <ul><li></li></ul>
  } else {
    $("#small").show();
    $("#medium").hide();
    $("#large").hide();
    $("#sizes").hide();
    $("#crust").show();
    //price: append DOM #pizzadescription <ul><li></li></ul>

  }
});


  // $("#toppings").change(function(event){
  //   event.preventDefault();
  //   var toppings = []
  //    $("input:checkbox[name=toppings]:change").change(function() {
  //     $("#cheese").toggle();
  //     $("#pepperoni").toggle();
  //     $("#anchovy").toggle();
  //     $("#artichokes").toggle();
  //     $("#mushrooms").toggle();
  // });

});
