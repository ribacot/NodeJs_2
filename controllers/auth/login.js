const { User } = require("../../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env;
const { HttpError } = require("../../helpers");

const login = async (req, res) => {
	const { email, password } = req.body;
	const user = await User.findOne({ email });
	if (!user) {
		throw HttpError(401, "email or password invalid");
	}
	const passwordCompare = await bcrypt.compare(password, user.password);
	if (!passwordCompare) {
		throw HttpError(401, "email or password invalid");
	}
	const token = jwt.sign( user._id , JWT_SECRET, { expiresIn: "2h" });

	res.status(200).json({ token });
};

module.exports = login;
