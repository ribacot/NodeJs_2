const { User } = require("../../models/user")


const logout=(req,res,next)=>{
    req.user.token=null;
    req.user.save();
    res.status(200).json({message:'Logged out'});
}
module.exports = logout;