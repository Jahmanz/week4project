//business logic
function Pizza(size, sauce, toppings) {
  this.size =toppings;
  this.sauces = sauces;
  this.veggieToppings = veggietoppings;
  this.meatToppings = meattoppings;
}

Pizza.prototype.fullpizza = function() {
  return "Size" + this.size + " " + "Sauce:" + this.sauce + " " +  "Veggie Topping:" + this.veggietoppings + " " + "Meat Topping" + this.meatToppings;
}

// user interface logic
$(document).ready(function() {
  $("form#new-places").submit(function(event) {
    event.preventDefault();

    var inputtedSize = $("input#size").val();
    var inputtedSuace = $("input#sauce").val();
    var inputtedYear = $("input#new-year").val();
    var inputtedActivity = $("input#new-activity").val();

    var newPlace = new Places(inputtedCity, inputtedCountry, inputtedYear, inputtedActivity);

    $("ul#visits").prepend("<li><span class='visits'>"+ newPlace.fullPlaces() + "</span></li>");

    $(".visits").last().click(function() {
      $("#show-places").show();
      $("#show-places h2").prepend(newPlace.cityName);
      $(".city").prepend(newPlace.cityName);
      $(".country").prepend(newPlace.countryName);
      $(".year").prepend(newPlace.whatYear);
      $(".activity").prepend(newPlace.whatActivities);
    });

    $("input#new-city").val("");
    $("input#new-country").val("");
    $("input#new-year").val("");
    $("input#new-activity").val("");
  });
});
