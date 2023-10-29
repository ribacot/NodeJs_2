const path = require("path");

const fs = require("fs").promises;

const Jimp = require("jimp");

const avatarDir = path.join(__dirname, "..", "public", "avatars");

const chengeAvatar = async (file, id) => {
	
	console.log(file);
	const { path: tempUpload, originalname } = file;

	const img = await Jimp.read(tempUpload);
	const imgResize = img.cover(250, 250).quality(60).write(tempUpload);
	const nameAvatar = `${id}${originalname}`;

	const resultUpload = path.join(avatarDir, nameAvatar);

	await fs.rename(tempUpload, resultUpload);

	return path.join("avatars", nameAvatar);
};

module.exports = chengeAvatar;
