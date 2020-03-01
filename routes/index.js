var data = require("../posts.json");

exports.view = function(req, res){
  console.log(req.query.mainFocus);


  res.render('index', data);
};