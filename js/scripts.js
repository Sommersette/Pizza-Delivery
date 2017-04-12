// BACKEND //
  // function grandTotal(order, address) {
  //   this.order = [];
  //   this.address = [];
  // }

  function Order(toppings, size, delivery) {
      this.toppings = toppings;
      this.size = size;
      this.delivery = delivery;
    }
  // function Address(street, city, state, zip) {
  //   this.street = street;
  //   this.city = city;
  //   this.state = state;
  //   this.zip = zip;
  // }
  Order.prototype.pizzaPrice = function(toppings, size, delivery) {
    var priceSize = 0;
    if (this.size === "small") {
      priceSize += 1.00
    } else if (this.size === "medium"){
      priceSize += 120.00
    } else {
      priceSize += 4000.00
    }
    var priceToppings = 0;
    if (this.toppings.length === 1) {
      priceToppings += 1.25
    } else if (this.toppings.length === 2) {
      priceToppings += 2.50
    } else if (this.toppings.length === 3) {
      priceToppings += 3.75
    } else if (this.toppings.length === 4) {
      priceToppings += 5.00
    } else {
      priceToppings += 6.25
    }

    var priceDelivery = 0;

    if (this.delivery) {
      priceDelivery += 3;
    } else {
      priceDelivery +=0;
    }


    return priceSize + priceToppings + priceDelivery;
  }

  // Address.prototype.deliveryPrice = function() {
  //   if (delivery === true) {
  //     this.order += 2.50
  //   } else {
  //    this.order += 0.00
  //   }
  // }
////////////////////////// FRONT END /////////////////////////////

  $(document).ready(function() {

    $(".dining").click(function(event) {
    event.preventDefault();
    var delivery = false;
    var inOrOut = $("input:radio[name=dining]:checked").val();
      // var delivery = $(this).val();
      if (inOrOut === "delivery") {
        delivery = true;

        // delivery.push(delivery);
        $("#address").show();
        $("#dining").hide();
      } else if (inOrOut === "takeaway") {
        delivery= false;
        $("#address, #dining").hide();
        $("#orderscreen, footer").show();
      }
      console.log(delivery);
    });

    $("#address").submit(function(event){
      event.preventDefault();
      var addressForm = $("#fullName").val();
      $("#address").hide();
      $("#orderscreen").show();
      console.log(addressForm);
    });

    $("#add").click(function(event){
      var size = $("input:radio[name=size]:checked").val();
      var toppings=[];
      $("input:checkbox[name=toppings]:checked").each(function() {
        var topping = $(this).val();
        toppings.push(topping);
      })
      var newOrder= new Order(toppings,size,delivery);
      toppings.forEach(function(topping) {
      $("#pizzadescription").append("<li>" + topping + "</li>");
      });
      $("#subtotal").append(newOrder.pizzaPrice());

      $("#placeOrder").click(function() {
        $("#confirmation").show();
        $("#totalprice").text("why");
        $("#totalprice").text("thank you for your order. The total price is" + newOrder.pizzaPrice());
      })
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

  // need to write code for add button to subtotal the cost and order.
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
