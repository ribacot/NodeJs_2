const { User } = require("../../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

const { HttpError } = require("../../helpers");
const register = async (req, res) => {
	const { email, password } = req.body;
	const user = await User.findOne({ email });

	if (user) {
		throw HttpError(409, "Email in use");
	}
	const hashPassword = await bcrypt.hash(password, 10);

	const newUser = await User.create({ ...req.body, password: hashPassword });
	// const token = jwt.sign({ id: newUser._id }, JWT_SECRET, { expiresIn: "23h" });
	// await User.updateOne({ _id: newUser._id }, { token });
	// res.status(201).json({token});
	res.status(201).json({
		user: {
			name: newUser.name,
			email: newUser.email,
			subscription: newUser.subscription,
		},
	});
};

module.exports = register;
