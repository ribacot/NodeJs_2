const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;
const HttpError = require("./HttpError");


const islogin = (user,next) => {
	if (user.token) {
		try {
			const { id } = jwt.verify(user.token, JWT_SECRET);

			if (id) {
				throw HttpError(409, "User in session");
			}
			next();
		} catch (error) {
			if (error.message !== "jwt expired") {
				next(error);
			}
		}
	}
};
module.exports = islogin
