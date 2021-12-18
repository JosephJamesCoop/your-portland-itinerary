const placesContainerEl = document.querySelector("#listOfAttractions");

// location id for Portland, Oregon required for making calls to the travel advisor api;
const locationId = 52024;

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

loadTime();

setInterval(loadTime, 1000);