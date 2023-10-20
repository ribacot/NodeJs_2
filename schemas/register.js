const Joi = require("joi");
const patterns = require("./patterns");

const registerSechemaJoi = Joi.object({
	name: Joi.string().required(),
	email: Joi.string().regex(patterns.emailPattern).required(),
	subscription: Joi.string().valid("starter", "pro", "business").required(),
	password: Joi.string().min(6).required(),
});

module.exports = registerSechemaJoi;