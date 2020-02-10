var data = require("../maingym-intermediate.json");

exports.view = function(req, res){
  console.log(data)
  res.render('maingym-intermediate', data);
};