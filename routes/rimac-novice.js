var data = require("../rimac-novice.json");

exports.view = function(req, res){
  console.log(data)
  res.render('index', data);
};