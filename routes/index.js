var data = require("../posts.json");

exports.view = function(req, res){
  //filter by user's info and yeah
  res.render('index', data);
};