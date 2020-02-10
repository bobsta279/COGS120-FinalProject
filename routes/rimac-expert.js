var data = require("../rimac-expert.json");

exports.view = function(req, res){
  console.log(data)
  res.render('rimac-expert', data);
};