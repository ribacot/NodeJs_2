// const path = require("path");

// const fs = require("fs").promises;

const User = require("../../models/user");
const { HttpError, chengeAvatar } = require("../../helpers");

// const avatarDir = path.join(__dirname, "..", "..", "public", "avatars");


const updAvatar = async (req, res, next) => {

	if(!req.file){
		throw HttpError(400)
	}
	const {_id} = req.user

	const pathAvatarUser = await chengeAvatar(req.file,_id);

	const updUser = await User.findOneAndUpdate(_id, { avatarURL: pathAvatarUser },{ new: true });

	res.status(201).json({
		user: {
			avatarURL: updUser.avatarURL,
		},
	});}
module.exports = updAvatar;
