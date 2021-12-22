var saveDates = function () {
  console.log(dates)
  localStorage.setItem("dates", JSON.stringify(dates));
};

// modal was triggered
$("#date-picker").on("show.bs.modal", function () {
  // clear values
  $("#modalArrivalDate, #modalDueDate").val("");
});

// save button in modal was clicked
$("#date-picker").click(function () {
  var arrivalDate = $("#modalArrivalDate").val();
  var departureDate = $("#modalDueDate").val();
  var monthStart = arrivalDate.split("/")[0];
  var monthEnd = departureDate.split("/")[0];
  var dayStart = arrivalDate.split("/")[1];
  var dayEnd = departureDate.split("/")[1];

  if (monthStart === monthEnd) {
    var c = 1 + (dayEnd - dayStart) + 1;
  } else if (monthStart === 01) {
    var a = 31 - monthStart;
    var b = 28 - monthEnd;
    var c = a + b + 1
  } else if (monthStart === 02) {
    var a = 28 - monthStart;
    var b = 31 - monthEnd;
    var c = a + b + 1
  } else if (monthStart === 03) {
    var a = 31 - monthStart;
    var b = 30 - monthEnd;
    var c = a + b + 1
  } else if (monthStart === 04) {
    var a = 30 - monthStart;
    var b = 31 - monthEnd;
    var c = a + b + 1
  } else if (monthStart === 05) {
    var a = 31 - monthStart;
    var b = 30 - monthEnd;
    var c = a + b + 1
  } else if (monthStart === 06) {
    var a = 30 - monthStart;
    var b = 31 - monthEnd;
    var c = a + b + 1
  } else if (monthStart === 07) {
    var a = 31 - monthStart;
    var b = 31 - monthEnd;
    var c = a + b + 1
  } else if (monthStart === 08) {
    var a = 31 - monthStart;
    var b = 30 - monthEnd;
    var c = a + b + 1
  } else if (monthStart === 09) {
    var a = 30 - monthStart;
    var b = 31 - monthEnd;
    var c = a + b + 1
  } else if (monthStart === 10) {
    var a = 31 - monthStart;
    var b = 30 - monthEnd;
    var c = a + b + 1
  } else if (monthStart === 11) {
    var a = 30 - monthStart;
    var b = 31 - monthEnd;
    var c = a + b + 1;
  } else if (monthStart === 12) {
    var a = 31 - monthStart;
    var b = 30 - monthEnd;
    var c = a + b + 1;
  }


  for (let i = 1; i < c; i++) {
    var portlandDates = i;
    console.log(portlandDates)

    var dateBox = $("<div>").addClass("card");

    var dateNumber = $("<h4>").addClass("card-header-title").text("Day  " + portlandDates);

    var eventUl = $("<ul>").addClass("event-options card-content event-options").attr("id", `theDate${i}`).text("");

    // append span and p element to parent li
    dateBox.append(dateNumber, eventUl);

    // append to ul list on the page
    $("#list-date").append(dateBox);
  };

  dates = c

  saveDates();
});

$("#modalArrivalDate").datepicker({
  minDate: 1
});

$("#modalDueDate").datepicker({
  minDate: 1
});


// reselct modal was triggered
$("#new-date-picker").on("show.bs.modal", function () {

});


var loadDates = function () {
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
  };

};

loadDates();
