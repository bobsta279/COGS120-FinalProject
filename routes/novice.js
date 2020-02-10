var data = require("../novice.json");

exports.view = function(req, res){
  console.log(data)
  res.render('index', data);
};