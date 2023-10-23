const Joi = require("joi");
const { subscriptionTags } = require("../../helpers");

const subscriptionSchemJoi = Joi.object({
	subscription: Joi.string()
		.valid(...subscriptionTags)
		.required(),
});

module.exports = subscriptionSchemJoi;
