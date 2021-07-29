const mongoose = require("mongoose");

const mongodb_url = "mongodb+srv://luna:efzwfIPGb7EiaWaI@clusterpublicationsapp.u72qt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(mongodb_url, {
	userCreateIndex: true,
	useNewUrlParser: true,
	useFindAndModify: false
}).then(db => console.log("Database connected successfully")).catch(err => console.log(err));