const { Schema, model } = require("mongoose");
const { hendleMongooseError } = require("../helpers");
const { patterns } = require("../schemas/contacts");

const friendSchema = new Schema(
	{
		title: {
			type: String,
			required: [true, "Name is required"],
			unique: false,
		},

		url: String,

		addressUrl: { type: String, required: [true, "AddressUrl is required"] },

		imageUrl: {
			type: String,
			default: "",
		},
		address: { type: String, default: null },
		workDays: {
			type: [
				{ isOpen: Boolean },
				{ isOpen: Boolean },
				{ isOpen: Boolean },
				{ isOpen: Boolean },
				{ isOpen: Boolean },
				{ isOpen: Boolean, from: { type: String }, to: { type: String } },
				{ isOpen: Boolean, from: { type: String }, to: { type: String } },
			],
			default: null,
		},

		phone: {
			type: String,
			match: patterns.phonePattern,

			default: null,
		},
		email: {
			type: String,
			match: patterns.emailPattern,

			default: null,
			unique: true,
		},
	},

	{ versionKey: false, timestamps: true }
);

friendSchema.post("save", hendleMongooseError);
const Friend = model("friend", friendSchema);

module.exports = Friend;
