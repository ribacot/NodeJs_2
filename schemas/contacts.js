const Joi = require("joi");

const addSchem = Joi.object({
	name: Joi.string().required(),
	email: Joi.string().required(),
	phone: Joi.string()
		.regex(/^[\(]\d{3}[\)]\s\d{3}[\-]\d{4}$/)
		.messages({ "string.pattern.base": `Phone number must have (123) 123-1234 type.` })
		.required(),
	favorite: Joi.boolean(),
});

module.exports = addSchem;
