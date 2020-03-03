var user = require("../user.json");
exports.view = function(req, res){
  user.firstName = "";
  user.lastName = "";
  user.gym = "";
  user.level = "";
  user.when = "";
  user.phone = "";
  user.userLevel = "";
  user.wantsTo = "";
  user.longTerm = "";
  user.noPrefWhen = "true";
  user.noPrefLoc = "true";
  user.noPrefFoc = "true";
  user.from = "true";

  res.render('login');
};