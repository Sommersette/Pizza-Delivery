////////////////////////// BACKEND /////////////////////////////


  function Order(toppings, size, delivery) {
      this.toppings = toppings;
      this.size = size;
      this.delivery = delivery;
    }

  Order.prototype.pizzaPrice = function(toppings, size, delivery) {
    var priceSize = 0;
    if (this.size === "small") {
      priceSize += 10.00
    } else if (this.size === "medium"){
      priceSize += 12.00
    } else {
      priceSize += 14.00
    }

    var priceToppings = 0;
    if (this.toppings.length === 1) {
      priceToppings += 1.00
    } else if (this.toppings.length === 2) {
      priceToppings += 2.00
    } else if (this.toppings.length === 3) {
      priceToppings += 3.00
    } else if (this.toppings.length === 4) {
      priceToppings += 4.00
    } else {
      priceToppings += 5.00
    }

    var priceDelivery = 0;
    if ($("input:checkbox[name=delivery]:checked").val()) {
      priceDelivery += 3;
    } else if (this.delivery){
      priceDelivery +=0;
    }



    return priceSize + priceToppings + priceDelivery;
  }

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
        $("#orderscreen").hide();
        $("#totalprice").text();
        $("#totalprice").text("Thank you for your order. Your total is $" + newOrder.pizzaPrice() + ".");
      })
    });


    $("#size").change(function(event){
    event.preventDefault();
    var Size = []
    var size = $("input:radio[name=size]:checked").val();
    if (size === "large") {
      $("#small").hide();
      $("#medium").hide();
      $("#large").show();
      $("#sizes").hide();
      $("#crust").show();
      $("#toppings").show();

    } else if (size === "medium") {
      $("#small").hide();
      $("#medium").show();
      $("#large").hide();
      $("#sizes").hide();
      $("#crust").show();
      $("#toppings").show();

    } else {
      $("#small").show();
      $("#medium").hide();
      $("#large").hide();
      $("#sizes").hide();
      $("#crust").show();
      $("#toppings").show()
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

});
