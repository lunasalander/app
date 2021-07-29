const mongoose = require("mongoose");

// utilizamos el esquema de datos de mongoose:

const {Schema} = mongoose;

// define the properties of the publications

const PostSchema = new Schema({
	username: {type: String, required: true},
	description: {type: String, required: true},
	base64: {type: String, required: true},
	date: {type: Date, default: Date.now}
});

// mondule.exports allows us to export the info of this module

module.exports = mongoose.model("Post", PostSchema);