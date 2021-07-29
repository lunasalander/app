async function getData(){
	const response = await fetch("/publications");
	const data = await response.json();
	console.log(data);
	// we search teh array to access the data
	for(let i = 0; i < data.length; i++){
		// first little box of data for the post
		const root = document.createElement("div");
		root.class = "root";
		// labels for the data
		const username = document.createElement("div");
		const description = document.createElement("div");
		const date = document.createElement("div");
		const image = document.createElement("img");
		const linea = document.createElement("hr");

		// display the data in the labels
		username.innerHTML = "Username: " + data[i].username;
		description.innerHTML = "Description: " + data[i].description;
		const fechaOK = new Date(data[i].date).toLocaleString();
		date.innerHTML = "Date posted: " + fechaOK;
		image.src = data[i].base64;
		image.style = "width: 300px";

		// with the 'append' function we add the elements to the
		// 'root' container
		root.append(image, username, description, date, linea);
		document.getElementById("publications").append(root);
	}
}
getData();