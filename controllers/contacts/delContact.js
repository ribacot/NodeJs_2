const { HttpError } = require("../../helpers");
const Contact = require("../../models/contact");

const delContact = async (req, res, next) => {
	const { contactId } = req.params;
	const result = await Contact.findOneAndDelete({_id:contactId});
	if (!result) {
		throw HttpError(404, "Not found");
	}
	res.json(result);
};
module.exports = delContact
