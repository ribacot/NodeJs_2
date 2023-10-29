const User = require("../../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

const { HttpError, islogin } = require("../../helpers");
const isUser = require("../../helpers/isUser");

const login = async (req, res, next) => {
	const { email, password } = req.body;
	const user = await isUser(email);
	islogin(user, next);

	const passwordMatch = await bcrypt.compare(password, user.password);
	if (!passwordMatch) {
		await User.updateOne({ _id: user._id }, { token: "" });
		throw HttpError(401, "Invalid credentials");
	}
	const payload = {
		id: user._id,
	};
	const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "4h" });
	await User.updateOne({ _id: user._id }, { token });
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
