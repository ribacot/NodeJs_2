const HttpError = require("./HttpError");
const chengeAvatar = require("./chengeAvatar");
const ctrlWrapper = require("./ctrl Wrapper");
const hendleMongooseError = require("./hendleMongooseError");
const islogin = require("./isLgin");

const pattern = require("./patterns");
const sendEmail = require("../services/email/sendEmail");
const subscriptionTags = require("./subscriptionTags");
const verificationMail = require("../services/email/verificationMail");
// const isUser = require("./isUser");

module.exports = {
	HttpError,
	ctrlWrapper,
	hendleMongooseError,
	islogin,
	// isUser,
	pattern,
	subscriptionTags,
	verificationMail,
	chengeAvatar,
	sendEmail,
};
