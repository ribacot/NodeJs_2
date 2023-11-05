const User = require("../models/user");
const HttpError = require("./HttpError");

const isUser = async ({searchValue,code=401,errorValue="User"}) => {
	const user = await User.findOne({ searchValue });

	if (!user) {
		throw HttpError(code, `${errorValue} not found`);
	}

	return user;
};
module.exports = isUser;
