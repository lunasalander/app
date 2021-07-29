// put image on the screen
let post = document.getElementById("post");
let base64;

//load the image onto the screen and generate a visualization on the screen
function leerArchivo(input){
	// if a file has been attached
	if(input.files){
		const reader = new FileReader();
		reader.onload = function(e){
			const filePreview = document.createElement("img");
			filePreview.id = "file-preview";
			// indicate to the 'src' attribute the image it should show
			filePreview.src = e.target.result;
			filePreview.width = 400;
			base64 = e.target.result;
			const previewZone = document.getElementById("preview");
			// store the label 'img' with all of its information in
			// the div 'preview'
			previewZone.appendChild(filePreview);
		}
		reader.readAsDataURL(input.files[0]);
	}
}
let fileUpload = document.getElementById("file");
// when the input for uploading the file changes, execute 
// the function that will display the image
fileUpload.onchange = function(e){
	leerArchivo(e.srcElement);
}

// send the data to the server

post.onclick = async() =>{
	let username = document.getElementById("username").value;
	let description = document.getElementById("description").value;
	// create an object to send all the data 
	const data = {username, description, base64};
	// prepare the objcet "data" with all of the info to 
	// send it to the server (index.js)
	const datos = {
		method: "POST",
		headers:{
			"Content-type": "application/json"
		},
		// data we send:
		body: JSON.stringify(data)
	};
	// send the data:
	const response = await fetch("/", datos);

	// recieve a response from the server

	const json = await response.json();
	console.log(json);
	// clear the information in the tables when posted
	document.getElementById("username").value = "";
	document.getElementById("description").value = "";
	document.getElementById("file").value = "";

	// access the image and remove it from the screen

	const image = document.getElementById("file-preview");
	const previewZone = document.getElementById("preview");
	previewZone.removeChild(image);
}