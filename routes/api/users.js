const express = require("express");
const router = express.Router();

const { validateBody, isAuthenticated} = require("../../middlewares");
const ctrl = require("../../controllers/users");
const { subscriptionSchemJoi } = require("../../schemas/userUpd/");

router.patch(
	"/",
	isAuthenticated,
	validateBody(subscriptionSchemJoi),
	ctrl.updateSubscription
);
module.exports = router
