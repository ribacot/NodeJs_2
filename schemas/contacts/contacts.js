const Joi = require("joi");
const patterns = require("../../helpers/patterns");

const addSchem = Joi.object({
	name: Joi.string().required(),
	email: Joi.string().regex(patterns.emailPattern).required(),
	phone: Joi.string()
		.regex(patterns.phonePattern)
		.messages({ "string.pattern.base": `Phone number must have (123) 123-1234 type.` })
		.required(),
	favorite: Joi.boolean(),
});

module.exports = addSchem;
