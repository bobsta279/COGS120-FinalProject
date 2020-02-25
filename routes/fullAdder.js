var user = require("../user.json");

exports.view = function(req, res){
  if (req.query.dropdown == "none"){
    isEntered = false;
  } else {
    user.level = (req.query.dropdown);
    res.render('fullAdder');
  }
};