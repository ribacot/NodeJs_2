const HttpError = (status, messedge) => {
	const error = new Error(messedge);
	error.status = status;
	return error;
};
module.exports = HttpError;
