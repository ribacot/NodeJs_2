const { Schema, model } = require("mongoose");
const { patterns } = require("../schemas");
const Joi = require("joi");
const { hendleMongooseError } = require("../helpers");

const subscriptionTegs = ["starter", "pro", "business"];
const userSchema = new Schema(
	{
		name: { type: String, required: true },
		password: {
			type: String,
			required: [true, "Set password for user"],
		},
		email: {
			type: String,
			match: patterns.emailPattern,
			required: [true, "Email is required"],
			unique: true,
		},
		subscription: {
			type: String,
			enum: subscriptionTegs,
			default: "starter",
		},
		token: String,
	},
	{ versionKey: false, timestamps: true }
);
userSchema.post("save", hendleMongooseError);

const registerSechemaJoi = Joi.object({
	name: Joi.string().required(),
	email: Joi.string()
		.regex(patterns.emailPattern)
		.message({ "string.pattern.base": "invalid email" })
		.required(),

	subscription: Joi.string()
		.valid(...subscriptionTegs)
		.required(),
	password: Joi.string().min(6).required(),
});

const loginSechemaJoi = Joi.object({
	email: Joi.string().regex(patterns.emailPattern).required(),
	password: Joi.string().min(6).required(),
});
const schemas = { registerSechemaJoi, loginSechemaJoi };

const User = model("User", userSchema);

module.exports = { User, schemas };
