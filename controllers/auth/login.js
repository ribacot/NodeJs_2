const User = require("../../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

const { HttpError, islogin,sendEmail } = require("../../helpers");
const isUser = require("../../helpers/isUser");

const login = async (req, res, next) => {
	const { email, password } = req.body;
	const user = await isUser({searchValue:email});
	islogin(user);

	if (!user.verify) {
		throw HttpError(401, "Email is not verifying");
	}
	const passwordMatch = await bcrypt.compare(password, user.password);
	if (!passwordMatch) {
		await User.updateOne({ _id: user._id }, { token: "" });
		throw HttpError(401, "Invalid credentials");
	}
	const payload = {
		id: user._id,
	};
	const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "4h" });
	user.token=token;
	user.save()
	return res.status(201).json({
		token,
		user: {
			name: user.name,
			email: user.email,
			subscription: user.subscription,
		},
	});
};
module.exports = login;
