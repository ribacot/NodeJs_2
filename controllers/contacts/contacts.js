const { ctrlWrapper } = require("../../helpers");
const Contact = require("../../models/contact");

const { HttpError } = require("../../helpers");
const getAll = async (req, res, next) => {
	const result = await Contact.find();
	res.status(200).json(result);
};
const getById = async (req, res, next) => {
	const { contactId } = req.params;
	const result = await Contact.findById(contactId);
	if (!result) {
		throw HttpError(404, "Not found");
	}
	res.status(200).json(result);
};
const add = async (req, res, next) => {
	const result = await Contact.create(req.body);
	res.status(201).json(result);
};

const delContact = async (req, res, next) => {
	const { contactId } = req.params;
	const result = await Contact.findOneAndDelete({_id:contactId});
	if (!result) {
		throw HttpError(404, "Not found");
	}
	res.json(result);
};

const updContact = async (req, res, next) => {
	const { contactId } = req.params;
	const result = await Contact.findByIdAndUpdate(contactId, req.body, { new: true });
	if (!result) {
		throw HttpError(404, "Not found");
	}
	res.status(201).json(result);
};
const updFavorite = async (req, res, next) => {
	const { contactId } = req.params;
	const result = await Contact.findByIdAndUpdate(contactId, req.body, { new: true });
	if (!result) {
		throw HttpError(404, "Not found");
	}
	console.log("favorites", result);
	res.status(201).json(result);
};

module.exports = {
	getAll: ctrlWrapper(getAll),
	getById: ctrlWrapper(getById),
	delContact: ctrlWrapper(delContact),
	updContact: ctrlWrapper(updContact),
	add: ctrlWrapper(add),
	updFavorite: ctrlWrapper(updFavorite),
};
