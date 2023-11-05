const {BASE_URL}=process.env

const verificationMail = (email,verificationCode) => {
	return {
		to: email,
		subject: "Verification Code",
		html: `<a href="${BASE_URL}/api/auth/verify/${verificationCode}">Click verify email </a>`,
	};
};

module.exports = verificationMail;
