var authKey = ""
var city = ""
var queryURLBase = "https://api.openweathermap.org/data/2.5/weather?q=Charlotte,nc&APPID=9813331de5b295221424eab086e34aa2"
var cityCounter = 0;

function runQuery(numCities,queryURL) {
    $.ajax ({url: queryURLBase, method: "GET"})
    .done (function(weatherData) {
        console.log(weatherData)
    })
}
