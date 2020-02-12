var authKey = "&appid=9813331de5b295221424eab086e34aa2"
var city = ""
var queryURLBase = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=9813331de5b295221424eab086e34aa2"
var cityCounter = 0;

function runQuery(queryURL) {
    $.ajax({ url: queryURL, method: "GET" })
        .done(function (weatherData) {
            console.log(weatherData)
            displayCity(city, weatherData);
        })
}



//create function
//display each city that was searched
//also add weather info
function displayCity(city, weatherData) {

    var divElement = document.createElement("Div");
    var cityElement = document.createElement("Div");
    var humidityElement = document.createElement("Div");
    var windSpeedElement = document.createElement("Div");
    var tempElement = document.createElement("Div");
    var cardElement = document.createElement("Div");
    cardElement.classList.add("card");
    divElement.classList.add("card-body");
    tempElement.classList.add("temp");
    cityElement.classList.add("city");
    humidityElement.classList.add("humidity");
    windSpeedElement.classList.add("windSpeed");
    cityElement.innerHTML = city + " " + moment().format("MM/DD/YYYY")
    humidityElement.innerHTML = "Humidity : " + weatherData.main.humidity
    windSpeedElement.innerHTML = "Wind Speed : " + weatherData.wind.speed
    tempElement.innerHTML = "Temperture : " + weatherData.main.temp + " F"

    divElement.append(cityElement);
    divElement.append(windSpeedElement);
    divElement.append(humidityElement);
    divElement.append(tempElement);
    cardElement.append(divElement);
    $(".searchHistory").prepend(cardElement);
}



$('#BtnSearch').on('click', function () {
    city = $(".searchInput").val()
    console.log(city)
    runQuery("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=9813331de5b295221424eab086e34aa2");
    console.log(queryURLBase);
})


//for long and latt.
// currentLocation();
// function currentLocation() {
//     searchHistory();
//     navigator.geolocation.getCurrentPosition(function(position) {
//         var userLat = position.coords.latitude;
//         var userLon = position.coords.longitude;
//         $.ajax({
//             url: queryUrl + ("forecast?lat=" + userLat + "&lon=" + userLon) + impUnit + apiKey1,
//             method: "GET"