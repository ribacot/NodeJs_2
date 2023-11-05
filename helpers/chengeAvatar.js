const path = require("path");
const fs = require("fs").promises;
const Jimp = require("jimp");

const HttpError = require("./HttpError");

const avatarDir = path.join(__dirname, "..", "public", "avatars");

const chengeAvatar = async (file, id) => {

	const { path: tempUpload, originalname } = file;

	try {
		const img = await Jimp.read(tempUpload);
		img.cover(250, 250).quality(60).write(tempUpload);

		const nameAvatar = `${id}${originalname}`;

		const resultUpload = path.join(avatarDir, nameAvatar);

		await fs.rename(tempUpload, resultUpload);

		return path.join("avatars", nameAvatar);
	} catch (error) {
		await fs.unlink(tempUpload);
		throw HttpError(400);
	}
};

module.exports = chengeAvatar;
