const { ctrlWrapper } = require("../../helpers");
const  updAvatar  = require("./updAvatar");
const updateSubscription = require("./updSubscription");

module.exports = {
	updateSubscription: ctrlWrapper(updateSubscription),
	updAvatar:ctrlWrapper(updAvatar),
};
