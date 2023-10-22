const { HttpError } = require("../../helpers");

const Contact = require("../../models/contact");

const getAll = async (req, res, next) => {
	const{page=1,limit=10,favorite,name} = req.query;
	console.log(req.query)

	const skip=(page-1)*limit;
	const result = await Contact.find({favorite}," ",{skip,limit });
		if (!result.length){return  res.status(200).json({messedge:"No results were found for your request"})
	}
	res.status(200).json(result);
};

module.exports=getAll