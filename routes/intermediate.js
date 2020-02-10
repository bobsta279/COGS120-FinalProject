var data = require("../intermediate.json");

exports.view = function(req, res){
  console.log(data)
  res.render('intermediate', data);
};