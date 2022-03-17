const User = require("../models/user");
const Record = require("../models/record");


module.exports.home = async function (req, res) {
  try {
    let user = await User.findById(req.user._id).populate("records");



  
    return res.render("home", {
        user: user,
        
      });
  } catch (err) {
    console.log("error occured:", err);
    return;
  }
};

module.exports.red = async function (req, res) {
  // try {
  //   if (req.isAuthenticated()) {
  //     return res.redirect("/home");
  //   }
  //   return res.render("user-sign-in");
  // } catch (error) {
  //   console.log(error);
  // }
  // return res.render('Landing_page');
  try {
    if (req.isAuthenticated()) {
      return res.redirect("/home");
    }
    return res.render("Landing_page");
  } catch (error) {
    console.log(error);
  }
};
