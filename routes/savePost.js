var data = require("../posts.json");
var user = require("../user.json");
var filteredData;

exports.addPost = function(req, res){  
  user.wantsTo = req.query.wantsTo;
  var myJson = {"name": user.firstName + user.lastName, "level": user.userLevel, "gym": user.gym, "phone": user.phone, "wantsToLearn": user.wantsTo, "when": user.when};
  data.posts.unshift(myJson);
  res.render('index', data);
};