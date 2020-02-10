var data = require("../rimac-intermediate.json");

exports.view = function(req, res){
  console.log(data)
  res.render('rimac-intermediate', data);
};