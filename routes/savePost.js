var user = require("../user.json");

exports.addPost = function(req, res){  
  user.wantsTo = req.query.wantsTo;
  
  res.render('fullAdderTwo');
};