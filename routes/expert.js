var data = require("../expert.json");

exports.view = function(req, res){
  console.log(data)
  res.render('expert', data);
};