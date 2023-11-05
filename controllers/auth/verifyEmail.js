const isUser = require("../../helpers/isUser");

const verifyEmail = async (req, res) => {
	const { verificationCode } = req.params;
	const user = await isUser({ value: verificationCode, errorValue: "email" });

    user.verify=true;
    user.verificationCode=""
    user.save()
    res.status(200).json({mesage:"Verification successful"})
};
module.exports = verifyEmail;
