const Friend = require("../../models/friend");

const getAll = async (req, res, next) => {
	// const { _id: owner } = req.user;
	const { page = 1, limit = 10 } = req.query;

	const skip = (page - 1) * limit;
	const result = await Friend.find({}, "-createAt -updateAt", { skip, limit });

	if (!result.length) {
		return res.status(200).json({ messedge: "No results were found for your request" });
	}
	res.status(200).json({ result, quantity: result.length });
};

module.exports = getAll;
