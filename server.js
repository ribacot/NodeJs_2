// ioSChbm7Sf1UR4VB
const app = require("./app");
const mongoose = require("mongoose");
const DP_HOST =
	"mongodb+srv://Andrii:ioSChbm7Sf1UR4VB@cluster0.etps8iu.mongodb.net/contacts_reader?retryWrites=true&w=majority";
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
