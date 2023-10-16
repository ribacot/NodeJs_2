const express = require("express");
const router = express.Router();

const { ctrlContacts } = require("../../controllers/contacts");

const { validateBody, isValidId } = require("../../middlewares");

const { addSchem, favoriteSchem } = require("../../schemas");

router.get("/", ctrlContacts.getAll);

router.get("/:contactId", isValidId, ctrlContacts.getById);

router.post("/", validateBody(addSchem), ctrlContacts.add);

router.delete("/:contactId", isValidId, ctrlContacts.delContact);

router.put("/:contactId", isValidId, validateBody(addSchem), ctrlContacts.updContact);

router.patch(
	"/:contactId/favorite",
	isValidId,
	validateBody(favoriteSchem),
	ctrlContacts.updFavorite
);

module.exports = router;
