// Code here
document.addEventListener("DOMContentLoaded", () => {
	fetchData(1).then((beer) => renderBeer(beer));
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
