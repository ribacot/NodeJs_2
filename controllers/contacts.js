const { ctrlWrapper } = require("../helpers");

const {
	listContacts,
	getContactById,
	removeContact,
	addContact,
	chengeContact,
} = require("../models/contacts");

const { HttpError } = require("../helpers");

const getAll = async (req, res, next) => {
	const result = await listContacts();
	res.status(200).json(result);
};
const getById = async (req, res, next) => {
	const { contactId } = req.params;
	const result = await getContactById(contactId);
	if (!result) {
		throw HttpError(404, "Not found");
	}
	res.status(200).json(result);
};
const add = async (req, res, next) => {
	const { error } = addSchem.validate(req.body);
	if (error) {
		throw HttpError(400, error.message);
	}
	const result = await addContact(req.body);
	res.status(201).json(result);
};

const delContact = async (req, res, next) => {
	const { contactId } = req.params;
	const result = await removeContact(contactId);
	if (!result) {
		throw HttpError(404, "Not found");
	}
	res.json(result);
};

const updContact = async (req, res, next) => {
	const { error } = addSchem.validate(req.body);
	if (error) {
		throw HttpError(400, error.message);
	}
	const { contactId } = req.params;
	const result = await chengeContact(contactId, req.body);
	if (!result) {
		throw HttpError(404, "Not found");
	}
	console.log("result", result);
	res.status(201).json(result);
};

module.exports = {
	getAll: ctrlWrapper(getAll),
	getById: ctrlWrapper(getById),
	delContact: ctrlWrapper(delContact),
	updContact: ctrlWrapper(updContact),
	add: ctrlWrapper(add),
};
