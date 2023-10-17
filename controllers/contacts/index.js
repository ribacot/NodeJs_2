const { ctrlWrapper } = require("../../helpers");

const getAll = require("./getAll");
const getById = require("./getById");
const add = require("./add");
const delContact = require("./delContact");
const updContact = require("./updContact");
const updFavorite = require("./updFavorite");


module.exports = {
	getAll: ctrlWrapper(getAll),
	getById: ctrlWrapper(getById),
	delContact: ctrlWrapper(delContact),
	updContact: ctrlWrapper(updContact),
	add: ctrlWrapper(add),
	updFavorite: ctrlWrapper(updFavorite),
};;
