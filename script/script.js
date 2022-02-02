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
let container = document.getElementsByClassName("container")[0];
let btnRemoveAdults = document.getElementById("btnRemoveAdults");
let btnRemoveKids = document.getElementById("btnRemoveKids");
let btnRemoveDontDrink = document.getElementById("btnRemoveDontDrink");
let btnRemoveHours = document.getElementById("btnRemoveHours");

// add events to the elements
calcButton.addEventListener("click", calculate);
window.addEventListener("DOMContentLoaded", (event) => {
  getLocalStorage();
});
btnRemoveAdults.addEventListener("click", removeAdultsLS);
btnRemoveKids.addEventListener("click", removeKidsLS);
btnRemoveDontDrink.addEventListener("click", removeDontDrinkLS);
btnRemoveHours.addEventListener("click", removeHoursLS);

// functions
function calculate() {
  let adultsV = adults.value;
  let kidsV = kids.value;
  let dontDrinkV = dontDrink.value;
  let hoursV = hours.value;

  // local storage
  localStorage.setItem("adultsLS", JSON.stringify(adultsV));
  localStorage.setItem("kidsLS", JSON.stringify(kidsV));
  localStorage.setItem("dontDrinkLS", JSON.stringify(dontDrinkV));
  localStorage.setItem("hoursLS", JSON.stringify(hoursV));

  // meat calculation
  if (hoursV < 6) {
    var meatLb = adultsV * 0.88 + 0.44 * kidsV;
    var meatKg = adultsV * 0.4 + 0.2 * kidsV;
  } else {
    var meatLb = adultsV * 1.54 + 0.77 * kidsV;
    var meatKg = adultsV * 0.7 + 0.35 * kidsV;
  }

  if (meatKg < 0 && meatLb < 0) {
    meatKg = 0;
    meatLb = 0;
  }

  // beer calculation
  if (hoursV < 6) {
    var beer = (adultsV - dontDrinkV) * 3;
  } else {
    var beer = (adultsV - dontDrinkV) * 5;
  }

  if (beer < 0) {
    beer = 0;
  }

  // drinks calculation
  if (hoursV < 6) {
    var drinksFlOz = dontDrinkV * 33.81 + 16.9 * kidsV;
    var drinksL = dontDrinkV * 1 + 0.5 * kidsV;
  } else {
    var drinksFlOz = dontDrinkV * 50.72 + 25.36 * kidsV;
    var drinksL = dontDrinkV * 1.5 + 0.75 * kidsV;
  }

  if (drinksFlOz < 0 && drinksL < 0) {
    drinksFlOz = 0;
    drinksL = 0;
  }

  // create the result elements
  container.style.display = "none";
  result.style.display = "inline-block";

  let title = document.createElement("h2");
  title.classList.add("title");
  result.appendChild(title);
  title.innerText = "You will need:";

  let meat = document.createElement("span");
  meat.classList.add("meat");
  result.appendChild(meat);
  meat.innerHTML =
    "<img class='foodLogo' src='images/meat.png' alt='meat logo' height='20px'>" +
    meatLb.toFixed(2) +
    "lb (" +
    meatKg.toFixed(2) +
    "kg) of meat.";

  let beerR = document.createElement("span");
  beerR.classList.add("beerR");
  result.appendChild(beerR);
  beerR.innerHTML =
    "<img class='foodLogo' src='images/beer.png' alt='beer logo' height='20px'>" +
    beer +
    " cans (12 fl oz/355ml each can) of beer.";

  let drinks = document.createElement("span");
  drinks.classList.add("drinks");
  result.appendChild(drinks);
  drinks.innerHTML =
    "<img class='foodLogo' src='images/juice.png' alt='juice logo' height='20px'>" +
    drinksFlOz.toFixed(2) +
    " fl oz (" +
    drinksL.toFixed(2) +
    "l) of drink of your choice for those who don't drink alcohol.";

  let backBtn = document.createElement("button");
  backBtn.classList.add("backBtn");
  result.appendChild(backBtn);
  backBtn.innerHTML = "<i class='fa-regular fa-arrow-turn-down-left'></i>";

  backBtn.addEventListener("click", goBack);
}
//

function goBack() {
  window.location.reload(true);
}
//

function getLocalStorage() {
  let adultsLs = JSON.parse(localStorage.getItem("adultsLS"));
  let kidsLs = JSON.parse(localStorage.getItem("kidsLS"));
  let dontDrinkLs = JSON.parse(localStorage.getItem("dontDrinkLS"));
  let hoursLs = JSON.parse(localStorage.getItem("hoursLS"));

  adults.value = adultsLs;
  kids.value = kidsLs;
  dontDrink.value = dontDrinkLs;
  hours.value = hoursLs;
}
//

function removeAdultsLS() {
  localStorage.removeItem("adultsLS");
  adults.value = "";
}
//

function removeKidsLS() {
  localStorage.removeItem("kidsLS");
  kids.value = "";
}
//

function removeDontDrinkLS() {
  localStorage.removeItem("dontDrinkLS");
  dontDrink.value = "";
}
//

function removeHoursLS() {
  localStorage.removeItem("hoursLS");
  hours.value = "";
}
//
