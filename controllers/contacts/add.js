const Contact = require("../../models/contact");
	const gravatar = require("gravatar");

const add = async (req, res, next) => {
	const{_id:owner,email} = req.user
	const avatarURL = gravatar.url(email);

	const result = await Contact.create({...req.body,owner,avatarURL});
	res.status(201).json(result);
};
module.exports = add;
