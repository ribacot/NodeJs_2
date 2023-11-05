const { HttpError, sendEmail, verificationMail } = require("../../helpers");
const isUser = require("../../helpers/isUser");

const resendVerifyEmail = async (req, res) => {
	const { email } = req.body;
	const user = await isUser({ searchValue: email, errorValue: "Email" });
	if (user.verify) {
		throw HttpError(401, "Verification has already been passed");
	}
	await sendEmail(verificationMail(email, user.verificationCode));


	res.status(200).json({ mesage: "Verification email sent" });
};

module.exports = resendVerifyEmail;
