const express = require("express");
const router = express.Router();

const ctrlContacts = require("../../controllers/contacts/index");

const { validateBody, isValidId, isAuthenticated, upload } = require("../../middlewares");

const { schemasJoi } = require("../../schemas/contacts");

router.get("/", isAuthenticated, ctrlContacts.getAll);

router.get("/:contactId", isAuthenticated, isValidId, ctrlContacts.getById);

router.post("/", isAuthenticated, validateBody(schemasJoi.addSchem), ctrlContacts.add);

router.delete("/:contactId", isAuthenticated, isValidId, ctrlContacts.delContact);

router.put(
	"/:contactId",
	isAuthenticated,
	isValidId,
	validateBody(schemasJoi.addSchem),
	ctrlContacts.updContact
);

router.patch(
	"/:contactId/favorite",
	isAuthenticated,
	isValidId,
	validateBody(schemasJoi.favoriteSchem),
	ctrlContacts.updFavorite
);
router.patch(
	"/:contactId/avatars",
	isAuthenticated,
	isValidId,
	upload.single("avatarURL"),
	ctrlContacts.updAvatar
);

module.exports = router;
