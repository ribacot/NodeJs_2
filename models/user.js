const { Schema, model } = require("mongoose");
const { patterns } = require("../schemas/contacts");
const Joi = require("joi");
const { hendleMongooseError, subscriptionTags } = require("../helpers");

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
			enum: subscriptionTags,
			default: "starter",
		},
		token: {
			type: String,
			default: "",
		},
	},
	{ versionKey: false, timestamps: true }
);
userSchema.post("save", hendleMongooseError);

const User = model("User", userSchema);

module.exports = User;
