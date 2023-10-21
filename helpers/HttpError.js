const options = {
	400: "Bad Request",
	401: "Not authorized",
	403: "Forbidden",
	404: "Not Found",
	409: "Conflict",
	500: "Internal Server Error",
};

const HttpError = (status, messedge = options[status]) => {
	const error = new Error(messedge);
	error.status = status;
	return error;
};
module.exports = HttpError;
