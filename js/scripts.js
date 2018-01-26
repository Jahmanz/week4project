//business logic
function Pizza(size, sauce, veggies, meat) {
  this.sizeName = size;
  this.sauceName = sauce;
  this.veggieName = veggies;
  this.meatName = meat;
}

Pizza.prototype.fullpizza = function() {
  return "Size:" + " " + this.sizeName + " " + "Sauce:" + " " + this.sauceName + " " + "Veggie Topping:" + " " + this.veggieName + " " + "Meat Topping" + " " + this.meatName;
}

// user interface logic
$(document).ready(function() {
  $("form#new-pizza").submit(function(event) {
    event.preventDefault();

    var inputtedSize = $("#new-size").val();
    var inputtedSauce = $("#new-sauce").val();
    var inputtedVeggies = $("#new-veggies").val();
    var inputtedMeat = $("#new-meat").val();

    var newPizza = new Pizza(inputtedSize, inputtedSauce, inputtedVeggies, inputtedMeat);

    $("ul#pizza").prepend("<li><span class='pizza'>"+ newPizza.fullpizza() + "</span></li>");

    $(".pizza").last().click(function() {

      $("#show-pizza").show();
      $("#show-pizza h2").prepend(newPizza.sizeName);
      $(".size").prepend(newPizza.sizeName);
      $(".sauce").prepend(newPizza.sauceName);
      $(".veggies").prepend(newPizza.veggieName);
      $(".meat").prepend(newPizza.meatName);
    });

    $("#new-size").val();
    $("#new-sauce").val();
    $("#new-veggies").val();
    $("#new-meat").val();
  });
});
