const User=require('../models/user');
const Record=require('../models/record');



module.exports.home=async function(req,res){
    try{
        let user=await User.findById(req.user._id).populate('records');
        

        return res.render('home',{
        user:user,
        });

    }catch(err){
        console.log("error occured:",err);
        return;

    }
    
}