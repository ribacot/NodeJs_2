const Joi = require("joi");
const patterns = require("../../helpers/patterns");

const emailSechemaJoi = Joi.object({
	email: Joi.string().regex(patterns.emailPattern).required(),
});

module.exports = emailSechemaJoi;