var data = require("../maingym-novice.json");

exports.view = function(req, res){
  console.log(data)
  res.render('maingym-novice', data);
};