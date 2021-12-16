 // Load Portland time.

 window.onload = function() {
    var localTime = document.getElementById("localTime");
    var dayEl = document.createElement("li")
   dayEl.textContent = moment().format("dddd"); 
    localTime.append(dayEl);  
    var dateEl = document.createElement("li")
   dateEl.textContent = moment().format("MMM do YYYY"); 
    localTime.append(dateEl);  
    var hourEl = document.createElement("li")
    hourEl.textContent = moment().format("LT"); 
     localTime.append(hourEl);  
  
  };
  