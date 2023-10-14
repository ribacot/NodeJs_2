const express = require("express");

const router = express.Router();

const { ctrlContacts } = require("../../controllers");

const { validateBody } = require("../../middlewares");

const { addSchem } = require("../../schemas");

router.get("/", ctrlContacts.getAll);

router.get("/:contactId", ctrlContacts.getById);

router.post("/", validateBody(addSchem), ctrlContacts.add);

router.delete("/:contactId", ctrlContacts.delContact);

router.put("/:contactId", validateBody(addSchem), ctrlContacts.updContact);

module.exports = router;
