$(document).ready(function () {
  // Setting a global array for hours referencing the 24 hour method
  var hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

  // Setting a global variable for reference when we color the time blocks based off the past, present, future
  var currentHour = moment().format("h");

  // Establishing current date from DOM
  setInterval(function () {
    var currentDate = moment().format(" dddd ~ MMMM Do, YYYY ~ h:mm:ss a");
    $("#currentDay").html(currentDate);
  }, 100);

  // This is running the function through each hour in the global variable and formatting it into the hour and AM PM
  hours.forEach(function (time, indexNum) {

    var timeFormat = [];
    timeFormat.push(moment().hour(time).format("h a"));


    // Declaring new element variables
    var divEl = $("<div class='row'>");
    var spanEl = $("<span class='hour col-1'>");
    var inputEl = $("<input class='description col-9'>");
    var buttonEl = $("<button class='saveBtn col-2'>");

    // Appending new elements onto the page
    $(".container").append(divEl);
    $(divEl).attr("data-val", indexNum);

    $(divEl).append(spanEl);
    $(spanEl).text(timeFormat);

    $(divEl).append(inputEl);
    $(inputEl).attr("data", "time-block #" + indexNum);
    var inputValue = $(inputEl).attr("data");
    var fromStorage = localStorage.getItem(inputValue);
    $(inputEl).val(fromStorage);

    $(divEl).append(buttonEl);
    $(buttonEl).text("💾");


    // Applying colors to Time Blocks relative to the actual hour
    if (hours[indexNum] > currentHour) {
        $(inputEl).addClass("past");
    } else if (hours[indexNum] < currentHour) {
        $(inputEl).addClass("future");
    } else $(inputEl).addClass("present")


  });

    // Clicking save will have data persist in Local Storage
$(".saveBtn").on("click", function () {
    event.preventDefault();

    var input = $(this).siblings("input").attr("data");
    var value = $(this).siblings("input").val();
    localStorage.setItem(input, value);
})

});
