var user = require("../user.json");

exports.view = function(req, res){
  res.render('create-profile', user);
};