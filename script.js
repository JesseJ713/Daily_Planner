$(function () {

    //Establishing current date from DOM
    var currentDate = moment().format("MMMM Do YYYY, h:mm a");
    $("#currentDay").text(currentDate);


});