var user = require("../user.json");

exports.view = function(req, res){
  user.level = (req.query.dropdown);
  res.render('fullAdder');
};