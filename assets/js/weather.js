var getWeatherData = function() {
    var appId = "e0c1ba6410238103fe2d482d8b1d932f"
    var url = `https://api.openweathermap.org/data/2.5/onecall?lat=45.52&lon=-122.67&appid=${appId}&units=imperial`;
    
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (responseData) {
            return responseData;
        })
        .then(function(weatherData) {
            displayWeatherData(weatherData);
        })
        .catch(function (error) {
            console.log(error);
            alert("Unable to fetch weather data.");
        })
}

var displayWeatherData = function(weatherData) {
    console.log(weatherData);
    var weatherWrapper = document.getElementById("weatherWrapper")
    
    var cardContainer = document.createElement("div");
    cardContainer.className = "level cardContainer";

    var leftJustifiedCardWrapper = document.createElement("div");
    leftJustifiedCardWrapper.className = "level-left"

    cardContainer.appendChild(leftJustifiedCardWrapper);
    weatherWrapper.appendChild(cardContainer);

    for (i=0; i<3; i++) {
        var card = singleWeatherCard(weatherData.daily[i]);
        leftJustifiedCardWrapper.appendChild(card);
    }
}

var singleWeatherCard = function (weatherData) {
    console.log(weatherData);
    var card = document.createElement("div");
    card.className = "card level-item";

    var cardContent = document.createElement("div");
    cardContent.className = "card-content weatherCard";

    var iconAndWeather = document.createElement("div");
    iconAndWeather.className = "iconAndWeather";

    var weather = document.createElement("div");
    weather.className = "weather";

    var date = document.createElement("h4");
    date.innerHTML = moment.unix(weatherData.dt).format("MM/DD/YYYY");
    date.className = "card-header-title";

    var icon = document.createElement("img");
    icon.src = weatherIconURL(weatherData.weather[0].icon);

    var temp = document.createElement("h6");
    var tempAverage = getTempAverage(weatherData.temp);
    temp.innerHTML = `Temp: ${tempAverage.toFixed(2)}&#xb0;F`;

    var wind = document.createElement("h6");
    wind.innerHTML = `Wind: ${weatherData.wind_speed} MPH`;

    var humidity = document.createElement("h6");
    humidity.innerHTML = `Humidity: ${weatherData.humidity}%`;

    cardContent.appendChild(date);
    cardContent.appendChild(iconAndWeather);

    iconAndWeather.appendChild(icon);
    iconAndWeather.appendChild(weather);

    weather.appendChild(temp);
    weather.appendChild(wind);
    weather.appendChild(humidity);

    card.appendChild(cardContent);

    return card;
}

var weatherIconURL = function(iconCode) {
    // http://openweathermap.org/img/wn/01d.png
    return `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
}

var getTempAverage = function(temp) {
    var { day, eve, morn, night } = temp;
    var sum = day + eve + morn + night;
    return sum / 4;
}


getWeatherData();




