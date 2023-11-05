require("dotenv").config();
const nodemailer = require("nodemailer");

const { MAIL_PASSWORD_TEST } = process.env;
const nodemailerConfig = {
	host: "smtp.ukr.net",
	port: 465,
	secure: true,
	auth: {
		user: "testnode@ukr.net",
		pass: MAIL_PASSWORD_TEST,
	},
};
const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (data) => {
	const email = {
		...data,
		from: "testnode@ukr.net",
	};

	await transport.sendMail(email);
	return true
};

module.exports = sendEmail
// const mail = {
// 	to: "testnode@ukr.net",
// 	from: "ribacot@ukr.net",
// 	subject: "TEST",
// 	html: "<p>Hello, it's TEST</p>",
// };
