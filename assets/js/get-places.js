// fetch call to obtain local attractions, data is logged to the console
fetch("https://travel-advisor.p.rapidapi.com/attractions/list?location_id=" + locationId + "&currency=USD&lang=en_US&lunit=km&limit=6&sort=recommended", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "travel-advisor.p.rapidapi.com",
		"x-rapidapi-key": "abe879055emsh7feb1d759b7b134p199e3djsnc1b869b0f2a7"
	}

}).then(response => { if (response) { response.json().then(data => createCards(data, placesContainerEl, "place")) } else {console.log("Could not retrieve data for attractions.")} });
