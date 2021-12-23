
// the filter id for coffee shops
const coffeeId = 9900;

// fetch call to obtain coffee shops, data is logged to the console
fetch("https://travel-advisor.p.rapidapi.com/restaurants/list?location_id=" + locationId + "&restaurant_tagcategory=" + coffeeId + "&restaurant_tagcategory_standalone=" + coffeeId + "&currency=USD&lunit=km&limit=9&lang=en_US", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "travel-advisor.p.rapidapi.com",
		"x-rapidapi-key": "abe879055emsh7feb1d759b7b134p199e3djsnc1b869b0f2a7"
	}
}).then(response => { if (response) { response.json().then(data => createCards(data, coffeeContainerEl, "coffee")) } else {console.log("Could not retrieve data for coffee.")} } );