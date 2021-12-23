const times = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM"];

const placesContainerEl = document.querySelector("#listOfAttractions");
const restaurantsContainerEl = document.querySelector("#listOfRestaurants");
const barsContainerEl = document.querySelector("#listOfBars");
const coffeeContainerEl = document.querySelector("#listOfCoffee");
const listDateEl = document.querySelector("#list-date");
const modalCardTitleEl = document.querySelector(".modal-card-title");

const dayDropDownEl = document.querySelector("#selection-el")
const dayStartEl = document.querySelector("#modalStartTime");
const dayEndEl = document.querySelector("#modalEndTime")
const modalDayEl = document.querySelector("#modalDay");

// location id for Portland, Oregon required for making calls to the travel advisor api;
const locationId = 52024;

// create option elements for the # of days
for (var i = 0; i < 7; i++) {
    var optionEl1 = document.createElement("option"); var optionEl2 = document.createElement("option");
    optionEl1.setAttribute("id", "day-option"); optionEl2.setAttribute("id", "day-option-modal");
    console.log(optionEl1);
    console.log(optionEl2);
    optionEl1.textContent = (i + 1); optionEl2.textContent = (i + 1);
    console.log(optionEl1.textContent);
    console.log(optionEl2.textContent);
    dayDropDownEl.appendChild(optionEl1); modalDayEl.appendChild(optionEl2);
}

// create option elements for the # of hours in times array
for (var i = 0; i < times.length; i++) {
    var optionEl1 = document.createElement("option"); var optionEl2 = document.createElement("option"); 
    optionEl1.setAttribute("id", "time-option"); optionEl2.setAttribute("id", "time-option");
    optionEl1.textContent = times[i]; optionEl2.textContent = times[i];

    dayStartEl.appendChild(optionEl1); dayEndEl.appendChild(optionEl2);
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

// get the element clicked on the page
var getEl = function(event) {

    var targetEl = event.target;

    // what to do if the user selects add on a card
    if (targetEl.textContent == "Add") {
        var title = targetEl.closest("div").firstChild.textContent;

        modalCardTitleEl.textContent = title;
    }

    // save the event by getting the value of the even, the day, and the start-end times
    if (targetEl.textContent == "Save Event") {
        var event = modalCardTitleEl.textContent;
        var start = dayStartEl.value;
        var end = dayEndEl.value;
        var day = modalDayEl.value;

        listDateEl.innerHTML = "";

        var newEvent = {
            event: event,
            time: start + " to " + end
        }

        // append to array that updates schedule
        updateDay(day, newEvent);

        
    }
}

var getDay = function(event) {
    var targetDay = event.target.value;

    // if the user selects a day from the dropdown
    saveDates(targetDay);
    listDateEl.innerHTML = "";
    loadDates();
}

loadTime();

setInterval(loadTime, 1000);

document.addEventListener("click", getEl);
dayDropDownEl.addEventListener("change", getDay);