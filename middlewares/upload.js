const multer = require("multer");
const path = require("path");

const tempDir = path.join(__dirname,"..", "temp");
const multerConfiges = multer.diskStorage({
	destination: tempDir,
    filename: (req, file, cb) => cb(null, file.originalname),
});

const upload = multer({ storage: multerConfiges });

module.exports =upload