const User = require("../models/user");
const Record = require("../models/record");

module.exports.home = async function (req, res) {
  try {
    return res.render("create-record");
  } catch (err) {
    console.log("error occured:", err);
    return;
  }
};

module.exports.create = async function (req, res) {
  try {
    let record=await Record.create(req.body);

    let user=await User.findById(req.user._id);

    user.records.push(record);
    user.save()

    return res.redirect("/home");

  } catch (err) {
    console.log("error occured:", err);
    return;
  }
};
