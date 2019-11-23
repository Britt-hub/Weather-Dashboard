var authKey = ""
var city = ""
var queryURLBase = ""
var cityCounter = 0;

function runQuery(numCities,queryURL) {
    $.ajax ({url: queryURLBase, method: "GET"})
    .done (function(weatherData) {
        console.log(weatherData)
    })
