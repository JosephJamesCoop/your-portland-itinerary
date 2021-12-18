// function to create cards; accepts the a response from a fetch request and also requires a container to append said information
const createCards = (fetchResponse, container) => {
    // iterate through the info we have
    for (var i = 0; i < 6; i++) {
        // create div elements, which will be our cards and apply flex and card properties to them
        let card = document.createElement("div");
        card.setAttribute("class", "card");
        card.setAttribute("style", "flex: 3 0 30%; margin: 15px;")
        // style and add necessary data using innerHTML
        card.innerHTML = '<div class="card-image" style="background-image: url(' + fetchResponse.data[i].photo.images.original.url
                        + '); background-size: cover; height: 300px; position: relative;"></div><div class="is-flex"><p class="card-header-title">' 
                        + fetchResponse.data[i].name + '</p><button style="margin: 12px 16px;" class="button is-primary">Add</button></div><p class="card-content">' 
                        + fetchResponse.data[i].description + '</p>';
        // append to the container passed through our function
        container.appendChild(card);
    }
}