const app = require("./app");
const mongoose = require("mongoose");
const {DP_HOST} =process.env 
mongoose.set("strictQuery", true);

mongoose
	.connect(DP_HOST)
	.then(() => {
		console.log("Database connect success");
		app.listen(5000, () => {
			console.log("Server running. Use our API on port: 5000");
		});
	})
	.catch((err) => {console.log(err.messege);
	process.exit(1)});
