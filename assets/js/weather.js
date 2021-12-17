var getWeatherData = function() {
    var appId = "e0c1ba6410238103fe2d482d8b1d932f"
    var url = `https://api.openweathermap.org/data/2.5/onecall?lat=45.52&lon=-122.67&appid=${appId}`;
    
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (responseData) {
            // displayWeatherData(responseData)
            console.log(responseData);
            return responseData;
        })
        .catch(function (error) {
            alert("Unable to fetch weather data.")
        })
}

var displayWeatherData = function(data) {
    var weatherWrapper = document.getElementById("weatherWrapper")
    for(i=1; i<=3; i++) {
        var singleCard = singleWeatherCard(data.daily[i])
        weatherWrapper.appendChild(singleCard)
    }
    
}

// var singleWeatherCard = function (weatherData) {
//     var card = document.createElement("div");
//     card.className = "card text-center bg-dark text-white";

//     var cardBody = document.createElement("div");
//     cardBody.className = "card-body";

//     var date = document.createElement("h4");
//     date.innerHTML = moment.unix(weatherData.dt).format("MM/DD/YYYY");
//     date.className = "card-title";

//     var icon = document.createElement("img");
//     icon.src = weatherIconURL(weatherData.weather[0].icon);

//     var temp = document.createElement("h6");
//     var tempAverage = getTempAverage(weatherData.temp);
//     temp.innerHTML = `Temp: ${tempAverage.toFixed(2)}&#xb0;F`;

//     var wind = document.createElement("h6");
//     wind.innerHTML = `Wind: ${weatherData.wind_speed} MPH`;

//     var humidity = document.createElement("h6");
//     humidity.innerHTML = `Humidity: ${weatherData.humidity}%`;

//     cardBody.appendChild(date);
//     cardBody.appendChild(icon);
//     cardBody.appendChild(temp);
//     cardBody.appendChild(wind);
//     cardBody.appendChild(humidity);

//     card.appendChild(cardBody);

//     return card;
// }

getWeatherData();




