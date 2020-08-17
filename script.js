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

    $(divEl).append(buttonEl);
    $(buttonEl).text("💾");

  });

// Clicking save in order to have data persist in Local Storage
$(".saveBtn").on("click", function () {
    event.preventDefault();

    var input = $(this).siblings("input").attr("data");
    var value = $(this).siblings("input").val();
    // console.log(input, value);
    localStorage.setItem(input, value);
    var fromStorage = localStorage.getItem(input);
    $(this).siblings("input").text(fromStorage);
})

});
