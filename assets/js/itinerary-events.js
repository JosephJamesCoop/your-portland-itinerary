var events = [];

/*
var saveEvents = function () {
    // console.log("events saving" + events)
    localStorage.setItem("events", JSON.stringify(events));
};*/

// modal was triggered
$("#event-picker").on("show.bs.modal", function () {
    // clear values
    $("#modalStartTime, #modalEndTime").val("");
});

// save button in modal was clicked
$("#event-picker").click(function () {
    /*
    var eventStartTime = $("#modalStartTime").val();
    console.log(eventStartTime)
    var eventEndTime = $("#modalEndTime").val();
    console.log(eventEndTime)
    var eventName = "test event name"
    console.log(eventName)
    var eventTotalTime = eventStartTime + " to " + eventEndTime



    if (eventStartTime && eventEndTime) {
        var eventLi = $("<li>").addClass("event-items");

        var eventTitle = $("<span>").addClass("pr-2").text(eventName);

        var eventStart = $("<p>").addClass("is-inline-block card p-2 content has-background-primary has-text-white").text(eventTotalTime);



        // append span and p element to parent li
        eventLi.append(eventTitle, eventStart);

        // append to ul list on the page
        $("#theDate1").append(eventLi);

        // events.push(eventStartTime + " to " + eventEndTime);
        console.log('events are: ', events);
        const event = {
            title: eventEndTime,
            start: eventStartTime,
            end: eventEndTime
        }

        events.push(
            event
        );
        console.log(events)
        saveEvents();
    } */

});





// var loadEvents = function () {
//     events = JSON.parse(localStorage.getItem("events"));

//     // if nothing in localStorage, create a new object to track all task status arrays
//     if (!events) {
//         // events = {
//         //     day1: [],
//         //     day2: [],
//         //     day3: [],
//         //     day4: [],
//         //     day5: [],
//         //     day6: [],
//         //     day7: [],
//         //     day8: [],
//         //     day9: [],
//         //     day10: [],
//         //     day11: [],
//         //     day12: [],
//         //     day13: [],
//         //     day14: []
//         // };
//         events = [];
//     }

//     // loop over object properties
//     $.each(events, function (list, arr) {
//         console.log(list, arr);
//         // then loop over sub-array
//         arr.forEach(function (events) {
//             createTask(title.text, start.text, end.text);
//             console.log("list" + list)
//         });
//     });
// };


// loadEvents();




// var loadEvents = function () {
//     events = JSON.parse(localStorage.getItem("events"));
//     console.log(events.legth)
//     for (let i = 1; i < events.length; i++) {

//         var eventLi = $("<li>").addClass("event-items");

//         var eventTitle = $("<span>").addClass("").text(eventName);

//         var eventStart = $("<p>").addClass("").text(eventStartTime);

//         var eventTo = $("<p>").addClass("").text(" to ");

//         var eventEnd = $("<p>").addClass("").text(eventEndTime);

//         // append span and p element to parent li
//         eventLi.append(eventTitle, eventStart, eventTo, eventEnd);

//         // append to ul list on the page
//         $("#theDate1").append(eventLi);
//     };

// };


// loadEvents();
