// the filter id for coffee shops
const barId = 11776;

// fetch call to obtain bars, data is logged to the console
fetch("https://travel-advisor.p.rapidapi.com/restaurants/list?location_id=" + locationId + "&restaurant_tagcategory=" + barId + "&restaurant_tagcategory_standalone=" + barId + "&currency=USD&lunit=km&limit=9&lang=en_US", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "travel-advisor.p.rapidapi.com",
		"x-rapidapi-key": "abe879055emsh7feb1d759b7b134p199e3djsnc1b869b0f2a7"
	}
}).then(response => { if (response) { response.json().then(data => createCards(data, barsContainerEl, "bar")) } else { alert("Could not retrieve data for bars.") } } );
