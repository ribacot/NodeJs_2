const { Schema, model } = require("mongoose");
const { patterns } = require("../schemas/contacts");
const { hendleMongooseError } = require("../helpers");

const contactSchema = Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			match: patterns.emailPattern,
			required: true,
		},
		phone: {
			type: String,
			match: patterns.phonePattern,
			required: true,
		},
		favorite: { type: Boolean, default: false },
		owner: {
			type: Schema.Types.ObjectId,
			ref: "user",
			required: true,
		},
	},
	{ versionKey: false, timestamps: true }
);

contactSchema.post("save", hendleMongooseError);

const Contact = model("contact", contactSchema);
module.exports = Contact;
