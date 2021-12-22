const placesContainerEl = document.querySelector("#listOfAttractions");
const restaurantsContainerEl = document.querySelector("#listOfRestaurants");
const barsContainerEl = document.querySelector("#listOfBars");
const coffeeContainerEl = document.querySelector("#listOfCoffee");
const listDateEl = document.querySelector("#list-date");

const dayDropDownEl = document.querySelector("#selection-el")

// location id for Portland, Oregon required for making calls to the travel advisor api;
const locationId = 52024;

for (var i = 0; i < 7; i++) {

    var optionEl = document.createElement("option");
    optionEl.setAttribute("id", "day-option");
    optionEl.text = (i + 1);

    dayDropDownEl.appendChild(optionEl);
}


// Load Portland time.
var loadTime = function() {
    var localTime = document.getElementById("localTime");
    localTime.innerHTML = "";
    var hourEl = document.createElement("li")
    hourEl.textContent = moment().format("LT"); 
    hourEl.setAttribute("class", "is-size-2")
    localTime.append(hourEl);
    var dateEl = document.createElement("li")
    dateEl.textContent = moment().format("dddd, MMM Do, YYYY"); 
    localTime.append(dateEl);  
}

var getEl = function(event) {
    var targetEl = event.target;

    if (targetEl.getAttribute("id") == "day-option") {
        saveDates(targetEl.text);
        listDateEl.innerHTML = "";
        loadDates();
    }
}

loadTime();

setInterval(loadTime, 1000);

document.addEventListener("click", getEl);