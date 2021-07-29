// access the 'express' package
const express = require("express");

// access the 'mongoose' package
const mongoose = require("mongoose");

const Post = require("./Post");
require("./database");

// create an instance of the 'express' package to be able to use it
const app = express();
const port = 3000;

// launch the app through the port 3000:

app.listen(process.env.PORT || port, () =>
	console.log("Server connected to the port " + port)
);

// the app shows the index.html archive published in the 'public' folder:
app.use(express.static("public"));

// configure the maximum size the data can have
app.use(express.json({limit: '5mb'}));

// obtain the data from 'index.html'
// req (request): el parametro desde donde recibimos los datos
// res (response): parametro desde donde podemos generar una
// respuesta al que nos ha enviado los datos
app.post("/", async function(req, res){
	console.log("Response recieved!!");
	// obtain the data in json format and turn them back into js
	// console.log(req.body);
	const {username, description, base64, date} = req.body;

	// creamos una instancia del esquema Post:
	const newPost = new Post({username, description, base64, date});

	// send the data to the database
	await newPost.save();

	// send a response to the client
	res.json({
		status: "success",
		username: username,
		desc: description,
		img: base64,
		date: date
	});
});

// obtain the data from the database

app.get("/publications", async function(req, res){
	const publications = await Post.find({});
	res.json(publications);
})