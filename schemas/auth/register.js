const Joi = require("joi");
const patterns = require("../../helpers/patterns");
const { subscriptionTags } = require("../../helpers");

const registerSechemaJoi = Joi.object({
	name: Joi.string().required(),
	email: Joi.string()
		.regex(patterns.emailPattern)
		.message({ "string.pattern.base": "invalid email" })
		.required(),
	subscription: Joi.string()
		.valid(...subscriptionTags)
		.required(),
	password: Joi.string().min(6).required(),
});

module.exports = registerSechemaJoi;
