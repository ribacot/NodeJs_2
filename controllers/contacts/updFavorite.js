const { HttpError } = require("../../helpers");
const Contact = require("../../models/contact");

const updFavorite = async (req, res, next) => {
	const { contactId } = req.params;
	const result = await Contact.findByIdAndUpdate(contactId, req.body, { new: true });
	if (!result) {
		throw HttpError(404, "Not found");
	}
	res.status(201).json(result);
};

module.exports = updFavorite