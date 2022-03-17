const User = require("../models/user");
const Record = require("../models/record");

// module.exports.home = async function (req, res) {
//   try {
//     return res.render("create-record");
//   } catch (err) {
//     console.log("error occured:", err);
//     return;
//   }
// };

module.exports.create = async function (req, res) {
  try {
    let record=await Record.create(req.body);
    if(record.soldAt!==null){
    let temp=await (req.body.soldAt-(req.body.soldAt*(req.body.royalty/100)))-req.body.boughtAt;
    temp=temp.toFixed(2)*record.quantity;
    if(temp>=0){
      record.profit=temp;
      record.loss=0;
    }
    else{
      record.loss=temp;
      record.profit=0;
    }
    record.save();
  }
  else{
    record.profit=0;
    record.loss=0;
    record.save();
  }

    let user=await User.findById(req.user._id);

    user.records.push(record);
    user.save()

    return res.redirect("/home");

  } catch (err) {
    console.log("error occured:", err);
    return;
  }
};

module.exports.addSold = async function (req, res) {
  try {
    let record=await Record.findById(req.body.recordId);
    record.soldAt=req.body.soldAt;
    let temp=await (req.body.soldAt-(req.body.soldAt*(record.royalty/100)))-record.boughtAt;
    temp=temp.toFixed(2)*record.quantity;
    if(temp>=0){
      record.profit=temp;
      record.loss=0;
    }
    else{
      record.loss=temp;
      record.profit=0;
    }
    record.save();

    return res.redirect("back");


  }catch (err) {
    console.log("error occured:", err);
    return;
  }
};