// function to create cards; accepts the a response from a fetch request and also requires a container to append said information
const createCards = (fetchResponse, container) => {
    console.log(fetchResponse);
    // iterate through the info we have
    var max = 6;
    for (var i = 0; i < max; i++) {
        // some places do not include photos, if there is no photo, simply skip it without creating a card
        if (!fetchResponse.data[i].photo) {
            max++;
        } else {
            // create div elements, which will be our cards and apply flex and card properties to them
            let card = document.createElement("div");
            var openText = "";

            // if there is data in the response related to whether an establishment is open or not
            if (fetchResponse.data[i].open_now_text) {
                let classes = 'card-content';
                
                // if the first letter of the open_now_text is an O, indicating it is open or is about to open, set the text to green
                if (fetchResponse.data[i].open_now_text[0] === "O") { classes = classes + ' has-text-success';
                } else { classes = classes + ' has-text-danger'; }

                // give the open text the appropriate html so it can be used in the innerHTML for our card
                openText = '<i class="' + classes + '">' + fetchResponse.data[i].open_now_text + '</i>';
            } else { openText = ""; }

            card.setAttribute("class", "card");
            card.setAttribute("style", "flex: 3 0 30%; margin: 15px;")
            // style and add necessary data using innerHTML
            card.innerHTML = '<div class="card-image" style="background-image: url(' + fetchResponse.data[i].photo.images.original.url
                            + '); background-size: cover; height: 300px; position: relative;"></div><div class="is-flex"><p class="card-header-title">' 
                            + fetchResponse.data[i].name + '</p><button style="margin: 12px 16px;" class="button is-primary">Add</button></div>' 
                            + openText + '<p class="card-content">' 
                            + fetchResponse.data[i].description + '</p>';
            // append to the container passed through our function
            container.appendChild(card);
        }
    }
}