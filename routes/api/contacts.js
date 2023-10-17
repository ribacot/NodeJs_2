const express = require("express");
const router = express.Router();

const  ctrlContacts  = require("../../controllers/contacts/index");

const { validateBody, isValidId } = require("../../middlewares");

const { schemasJoi } = require("../../schemas");

router.get("/", ctrlContacts.getAll);

router.get("/:contactId", isValidId, ctrlContacts.getById);

router.post("/", validateBody(schemasJoi.addSchem), ctrlContacts.add);

router.delete("/:contactId", isValidId, ctrlContacts.delContact);

router.put("/:contactId", isValidId, validateBody(schemasJoi.addSchem), ctrlContacts.updContact);

router.patch(
	"/:contactId/favorite",
	isValidId,
	validateBody(schemasJoi.favoriteSchem),
	ctrlContacts.updFavorite
);

module.exports = router;
