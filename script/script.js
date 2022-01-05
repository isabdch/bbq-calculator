// proportion of meat and drink:
// 0.88 pounds - or 0.4kg of meat for an adult. If the barbecue duration is more than 6h then it's 1.54 pounds - or 0.7kg;
// 3 cans of beer for an adult. Each beer can has 12 fl oz - or 355ml. If the barbecue duration is more than 6h then it's 5 cans.
// for those who don't drink alcohol it's 33.81 fl oz - or 1l of the drink of their choice. If the barbecue duration is more than 6h then it's 50.72 fl oz - or 1,5l.
// for the kids it's a half of all adult's portion.

// get HTML elements
let adults = document.getElementById("nAdults");
let kids = document.getElementById("nKids");
let dontDrink = document.getElementById("dontDrink");
let hours = document.getElementById("nHours");
let calcButton = document.getElementById("calcButton");
let result = document.getElementById("result");

// add events to the elements
calcButton.addEventListener("click", calculate);

// functions
function calculate() {
  let adultsV = adults.value;
  let kidsV = kids.value;
  let dontDrinkV = dontDrink.value;

  // meat
  if (hours.value < 6) {
    let meatLb = adultsV * 0.88 + (0.44 * kidsV);
    let meatKg = adultsV * 0.4 + (0.2 * kidsV);
  } else {
    let meatLb = adultsV * 1.54 + (0.77 * kidsV);
    let meatKg = adultsV * 0.7 + (0.35 * kidsV);
  }

  // beer
  if (hours.value < 6) {
    let beer = (adultsV - dontDrinkV) * 3;
  } else {
    let beer = (adultsV - dontDrinkV) * 5;
  }

  // drinks
  if (hours.value < 6) {
    let drinksFlOz = dontDrinkV * 33.81 + (16.90 * kidsV);
    let drinksL = dontDrinkV * 1 + (0.5 * kidsV);
  } else {
    let drinksFlOz = dontDrinkV * 50.72 + (25.36 * kidsV);
    let drinksL = dontDrinkV * 1.5 + (0.75 * kidsV);
  }
}
