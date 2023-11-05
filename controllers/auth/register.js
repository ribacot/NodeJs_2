const bcrypt = require("bcrypt");
// const {BASE_URL} = process.env;
const gravatar = require("gravatar");
const {nanoid} = require("nanoid");
const User = require("../../models/user");

const { HttpError, sendEmail, verificationMail } = require("../../helpers");

const register = async (req, res) => {
	const { email, password } = req.body;
	const user = await User.findOne({ email });
	if (user) {
		throw HttpError(409, "Email in use");
	}
	const verificationCode = nanoid();
	const hashPassword = await bcrypt.hash(password, 10);
	const avatarURL = gravatar.url(email);
	const newUser = await User.create({
		...req.body,
		password: hashPassword,
		avatarURL,
		verificationCode,
	});
	await sendEmail(verificationMail(email,verificationCode));

	res.status(201).json({
		user: {
			name: newUser.name,
			email: newUser.email,
			subscription: newUser.subscription,
			avatarURL: newUser.avatarURL,
		},
	});
};

module.exports = register;
