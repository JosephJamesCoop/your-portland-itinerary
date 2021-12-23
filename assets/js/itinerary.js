// modal was triggered
$("#date-picker").on("show.bs.modal", function () {
  // clear values
  $("#modalArrivalDate, #modalDueDate").val("");
});

// // save button in modal was clicked
// $("#date-picker").click(function () {
//   var arrivalDate = $("#modalArrivalDate").val();
//   var departureDate = $("#modalDueDate").val();
//   var monthStart = arrivalDate.split("/")[0];
//   var monthEnd = departureDate.split("/")[0];
//   var dayStart = arrivalDate.split("/")[1];
//   var dayEnd = departureDate.split("/")[1];

//   if (monthStart === monthEnd) {
//     var c = 1 + (dayEnd - dayStart) + 1;
//   } else if (monthStart === 01) {
//     var a = 31 - monthStart;
//     var b = 28 - monthEnd;
//     var c = a + b + 1
//   } else if (monthStart === 02) {
//     var a = 28 - monthStart;
//     var b = 31 - monthEnd;
//     var c = a + b + 1
//   } else if (monthStart === 03) {
//     var a = 31 - monthStart;
//     var b = 30 - monthEnd;
//     var c = a + b + 1
//   } else if (monthStart === 04) {
//     var a = 30 - monthStart;
//     var b = 31 - monthEnd;
//     var c = a + b + 1
//   } else if (monthStart === 05) {
//     var a = 31 - monthStart;
//     var b = 30 - monthEnd;
//     var c = a + b + 1
//   } else if (monthStart === 06) {
//     var a = 30 - monthStart;
//     var b = 31 - monthEnd;
//     var c = a + b + 1
//   } else if (monthStart === 07) {
//     var a = 31 - monthStart;
//     var b = 31 - monthEnd;
//     var c = a + b + 1
//   } else if (monthStart === 08) {
//     var a = 31 - monthStart;
//     var b = 30 - monthEnd;
//     var c = a + b + 1
//   } else if (monthStart === 09) {
//     var a = 30 - monthStart;
//     var b = 31 - monthEnd;
//     var c = a + b + 1
//   } else if (monthStart === 10) {
//     var a = 31 - monthStart;
//     var b = 30 - monthEnd;
//     var c = a + b + 1
//   } else if (monthStart === 11) {
//     var a = 30 - monthStart;
//     var b = 31 - monthEnd;
//     var c = a + b + 1;
//   } else if (monthStart === 12) {
//     var a = 31 - monthStart;
//     var b = 30 - monthEnd;
//     var c = a + b + 1;
//   }


//   for (let i = 1; i < c; i++) {
//     var portlandDates = i;
//     console.log(portlandDates)

//     var dateBox = $("<div>").addClass("card");

//     var dateNumber = $("<h4>").addClass("card-header-title").text("Day  " + portlandDates);

//     var eventUl = $("<ul>").addClass("event-options card-content event-options").attr("id", `theDate${i}`).text("");

//     // append span and p element to parent li
//     dateBox.append(dateNumber, eventUl);

//     // append to ul list on the page
//     $("#list-date").append(dateBox);
//   };

//   dates = c

//   saveDates();
// });

$("#modalArrivalDate").datepicker({
  minDate: 1
});

$("#modalDueDate").datepicker({
  minDate: 1
});


// reselect modal was triggered
$("#new-date-picker").on("show.bs.modal", function () {

});

// save the dates
var saveDates = function (num) {
  localStorage.setItem("dates", JSON.stringify(num));
};

// load dates into container
var loadDates = function () {
  /*
  dates = JSON.parse(localStorage.getItem("dates"));
  for (let i = 1; i < dates; i++) {
    var portlandDatesLoad = i;
    console.log(portlandDatesLoad)
    var dateBox = $("<div>").addClass("card");
    var dateNumber = $("<h4>").addClass("card-header-title").text("Day  " + portlandDatesLoad);
    var eventUl = $("<ul>").addClass("event-options card-content event-options").attr("id", `theDate${i}`).text("");
    // append span and p element to parent li
    dateBox.append(dateNumber, eventUl);
    // append to ul list on the page
    $("#list-date").append(dateBox);
  };*/

  var dates = localStorage.getItem("dates");

  if (dates == null) {
    dates = 5;
    saveDates(dates);
    renderDates(dates);
    return;
  }

  dates = JSON.parse(dates);
  renderDates(dates);
};

// save the current day
var saveDay = function (day, schedule) {
  localStorage.setItem("day-" + day, JSON.stringify(schedule))
};

// load the day schedule into a date card
var loadDay = function (day) {
  var day_local = localStorage.getItem("day-" + day);

  if (day_local == null) {
    return '<p class="content"><i>Nothing planned for Day ' + day + '</i></p>';
  }

  day_local = JSON.parse(day_local);

  if (day_local.length == 0) {
    return '<p class="content"><i>Nothing planned for Day ' + day + '</i></p>';
  }

  var listItems = "";

  for (var i = 0; i < day_local.length; i++) {
      listItems += `
        <li class="event-items" id="${"event-item-" + i + "-day-" + day}">
          <span class="span-design">${day_local[i]["event"]}</span>
          <span class="is-inline-block card p-2 has-text-white button-design">${day_local[i]["time"]}</span>
          <button class="button is-light is-small mb-5 removeEventBtn" data-day="${day}" data-row="${i}">x</button>
        </li>
      `
  }

  return listItems;
}

// update the days when the user adds a new event
var updateDay = function (day, activity) {
  let day_local = localStorage.getItem("day-" + day);

  if (day_local == null) {
    day_local = [];
  } else {
    day_local = JSON.parse(day_local);
  }


  if (day_local.length == 0) {
    day_local.push(activity);
  } else {
    for(i=0;i<day_local.length;i++) {
      var activityTime = timeStringToMoment(activity.time);
      var arrayTime = timeStringToMoment(day_local[i].time);
      // if start time of activity < day_local[i] start time
      if (activityTime.isBefore(arrayTime)) {
        day_local.splice(i, 0, activity);
        break;
      } else if (i + 1 == day_local.length) {
        day_local.push(activity);
        break;
      }
      // stop
    }
  }

  saveDay(day, day_local)
  loadDates();
}

var timeStringToMoment = function(timeString) {
  // 9:00 AM to 9:00 AM
  timeString = timeString.split(" to ")[0];
  return moment(timeString, 'h:mm A');
}

// render dates to dashboard
var renderDates = function (dates) {
  dates = JSON.parse(dates)
  for (var i = 0; i < dates; i++) {
    var dateCard = document.createElement("div");
 
    dateCard.setAttribute("class", "card itinerary-box");
  


    dateCard.setAttribute("style", "flex: 1 1 0");
    dateCard.setAttribute("id", "card-" + (i + 1));

    dateCard.innerHTML = `
      <h4 class="m-2 card-header-title">Day ${i + 1}</h4>
      <ul id="theDate" data-day="${i + 1}" class="card-content event-options">${loadDay(i + 1)}</ul>
    `;


    listDateEl.appendChild(dateCard);
  }
  $('.removeEventBtn').on('click', function() {
    var day = $(this).attr("data-day");
    var row = $(this).attr("data-row");


    var id = `#event-item-${row}-day-${day}`;

    var eventText = $(id).children()[0].innerHTML;
    var eventTime = $(id).children()[1].innerHTML;

    var eventObject = {
      event: eventText,
      time: eventTime
    }

    removeEventFromLocalStorage(eventObject, day);
    $('#list-date').empty();
    renderDates(localStorage.getItem("dates"));
  });
}

var removeEventFromLocalStorage = function(event, day) {
  var events = localStorage.getItem("day-" + day);
  events = JSON.parse(events);

  for (i=0;i<events.length;i++) {
    if (events[i].event == event.event && events[i].time == event.time) {
      events.splice(i, 1);
      break;
    }
  }
  localStorage.setItem("day-" + day, JSON.stringify(events));
}


loadDates();

