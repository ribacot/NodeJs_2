const { Schema, model } = require("mongoose");
const { patterns } = require("../schemas/");

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
	},
	{ versionKey: false, timestamps: true }
);

contactSchema.post("save", (error, data, next) => {
	error.status = 400;
	next();
});

const Contact = model("contact", contactSchema);
module.exports = Contact;
