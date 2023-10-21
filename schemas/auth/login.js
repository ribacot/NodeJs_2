const Joi = require("joi");
const patterns = require("../../helpers/patterns");

const loginSechemaJoi = Joi.object({
	email: Joi.string().regex(patterns.emailPattern).required(),
	password: Joi.string().min(6).required(),
});

module.exports = loginSechemaJoi;