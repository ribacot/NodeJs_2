const express = require("express");
const router = express.Router();

const { validateBody, isAuthenticated,upload} = require("../../middlewares");
const ctrl = require("../../controllers/users");
const { subscriptionSchemJoi } = require("../../schemas/userUpd/");

router.patch(
	"/",
	isAuthenticated,
	validateBody(subscriptionSchemJoi),
	ctrl.updateSubscription
);
router.patch(`/avatars`, isAuthenticated,upload.single("avatarUrl"), ctrl.updAvatar);

module.exports = router
