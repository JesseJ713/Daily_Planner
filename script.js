$(document).ready(function () {
  // Setting a global array for hours referencing the 24 hour method
  var hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

  // Establishing current date from DOM
  // var currentDate = moment().format("MMMM Do YYYY, h:mm:ss a");

  setInterval(function () {
    var currentDate = moment().format("MMMM Do YYYY, h:mm:ss a");
    $("#currentDay").html(currentDate);
  }, 100);

  // This is running the function through each hour in the global variable and formatting it into the hour and AM PM
  hours.forEach(function (time, index) {

    var time = [];
    time.push(moment().hour(time).format("h A"));
    // console.log(parseInt(time));
    // console.log(moment().hour());

    // Declaring new element variables
    var divEl = $("<div>");
    var spanEl = $("<span>");
    var inputEl = $("<input>");
    var buttonEl = $("<button>");

    // Appending new elements onto the page
    $(".container").append(divEl);
    // $(".container").addClass("row");

    $(divEl).addClass("row");
    // $(divEl).attr("data-val", index);
    $(divEl).append(spanEl);
    $(spanEl).text(time);
    // $(spanEl).addClass("time-block");
    $(spanEl).addClass("hour");
    $(spanEl).addClass("col-1");
    $(divEl).append(inputEl);
    $(inputEl).addClass("description");
    $(inputEl).addClass("col-6");
    $(divEl).append(buttonEl);
    $(buttonEl).text("save placeholder");
    $(buttonEl).addClass("saveBtn");
    $(buttonEl).addClass("col-2");

  });
});
