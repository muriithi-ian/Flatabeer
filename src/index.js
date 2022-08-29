// Code here
document.addEventListener("DOMContentLoaded", () => {
	fetchData(1).then((beer) => renderBeer(beer));
    fetchData().then((beers) => renderNav(beers));
});

function fetchData(id = null) {
	const url = id
		? `http://localhost:3000/beers/${id}`
		: `http://localhost:3000/beers`;
	return fetch(url, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	})
		.then((res) => res.json())
		.catch((err) => console.log(err));
}

function renderBeer(beer) {
	/* targets */
	const beerName = document.querySelector("#beer-name");
	const beerImage = document.querySelector("#beer-image");
	const beerDescription = document.querySelector("#beer-description");

	/* renders beer*/
	beerName.textContent = beer.name;
	beerImage.src = beer.image_url;
	beerDescription.textContent = beer.description;
}

function renderNav(beers) {
	/* targets */
	const beerList = document.querySelector("#beer-list");

	//remove placeholder text
	beerList.textContent = "";

	//render list of beers
	beers.forEach((beer) => {
		const li = document.createElement("li");
		li.textContent = beer.name;
		
		beerList.appendChild(li);
	});
}
