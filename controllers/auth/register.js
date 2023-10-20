const { User } = require("../../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

const { HttpError } = require("../../helpers");
const register = async (req, res) => {
	const { email, password } = req.body;
	const user = await User.findOne({ email });

	if (user) {
		throw HttpError(409, "User already exists");
	}
	const hashPassword = await bcrypt.hash(password, 10);

	const newUser = await User.create({ ...req.body, password: hashPassword});
	const token = jwt.sign({ id: newUser._id }, JWT_SECRET, { expiresIn: "2h" });
	await User.updateOne({ _id: newUser._id }, { token });
	res.status(201).json(token);
};
module.exports = register;
