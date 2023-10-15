const { Schema, model } = require("mongoose");

const contactSchema = Schema(
	// {
	// 	name: {
	// 		type: String,
	// 		match: /^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
	// 		required: true,
	// 	},
	// 	email: {
	// 		type: String,
	// 		match: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
	// 		required: true,
	// 	},
	// 	phone: {
	// 		type: String,
	// 		match: /^[\(]\d{3}\[\)]\s\d{3}[\-]\d{4}$/,
	// 		required: true,
	// 	},
	// 	favorite: { type: Boolean, default: false },
	// },
    {
        name: {
          type: String,
          required: [true, 'Set name for contact'],
        },
        email: {
          type: String,
        },
        phone: {
          type: String,
        },
        favorite: {
          type: Boolean,
          default: false,
        },
      },
	{ versionKey: false, timestamps: true }
);

contactSchema.post("save", (error, data, next) => {
	error.status = 400;
	next();
});

const Contact = model("contact", contactSchema);
module.exports = Contact;
