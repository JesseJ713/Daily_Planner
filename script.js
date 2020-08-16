$(document).ready(function() {

    //Establishing current date from DOM
    // var currentDate = moment().format("MMMM Do YYYY, h:mm:ss a");

    setInterval(function() {
        var currentDate = moment().format("MMMM Do YYYY, h:mm:ss a");
        $("#currentDay").html(currentDate);
    }, 100);


});