 // Load Portland time.
 var loadTime = function() {
    var localTime = document.getElementById("localTime");
    localTime.innerHTML = "";
    var hourEl = document.createElement("li")
    hourEl.textContent = moment().format("LT"); 
    hourEl.setAttribute("class", "is-size-2")
    localTime.append(hourEl);
    var dateEl = document.createElement("li")
    dateEl.textContent = moment().format("dddd, MMM do, YYYY"); 
    localTime.append(dateEl);  
}

loadTime();

setInterval(loadTime, 1000);