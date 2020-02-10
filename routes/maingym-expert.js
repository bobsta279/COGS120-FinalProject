var data = require("../maingym-expert.json");

exports.view = function(req, res){
  console.log(data)
  res.render('index', data);
};