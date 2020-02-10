var data = require("../maingym.json");

exports.view = function(req, res){
  console.log(data)
  res.render('index', data);
};