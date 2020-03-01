var user = require("../user.json");

exports.addPost = function(req, res){  
  user.wantsTo = req.query.wantsTo;
  user.from = "true";

  
  res.render('fullAdderTwo');
};