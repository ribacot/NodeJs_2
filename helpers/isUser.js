const User=require("../models/user");
const HttpError = require("./HttpError");

const isUser=async(email)=>{
    const user = await User.findOne({ email });

    if (!user) {
        throw HttpError(401,"User not found");
    }
return user
}
module.exports = isUser