const Contact = require("../../models/contact");

const getAll = async (req, res, next) => {
	const { _id: owner } = req.user;
	const { page = 1, limit = 10, favorite = true } = req.query;

	const skip = (page - 1) * limit;
	const result = await Contact.find({owner}, "-createAt -updateAt", { skip, limit }).populate("owner");

	if (!result.length) {
		return res.status(200).json({ messedge: "No results were found for your request" });
	}
	res.status(200).json({ result, quantity: result.length });
};

module.exports = getAll;
