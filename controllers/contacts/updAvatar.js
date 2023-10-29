const { HttpError, chengeAvatar } = require("../../helpers");
const Contact = require("../../models/contact");

const updAvatar = async (req, res, next) => {
	const { contactId } = req.params;


	if (!req.file) {
		throw HttpError(400);
	}

	const pathAvatarContact = await chengeAvatar(req.file, contactId);

	const result = await Contact.findByIdAndUpdate(
		contactId,
		{ avatarURL: pathAvatarContact },
		{ new: true }
	);
	if (!result) {
		throw HttpError(404, "Not found");
	}
	res.status(201).json(result);
};

module.exports = updAvatar;
