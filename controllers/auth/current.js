const current = async (req, res, next) => {
	const { email, name, subscription } = req.user;
	res.status(200).json({
		name,
		email,
		subscription,
	});
};

module.exports = current;
