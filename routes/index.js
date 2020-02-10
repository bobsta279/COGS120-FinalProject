var data = require("../posts.json");

exports.view = function(req, res){
  console.log(data)
  res.render('index', data);
};