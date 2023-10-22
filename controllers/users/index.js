const { ctrlWrapper } = require("../../helpers");
const updateSubscription = require("./updSubscription");

module.exports = {
	updateSubscription: ctrlWrapper(updateSubscription),
};
