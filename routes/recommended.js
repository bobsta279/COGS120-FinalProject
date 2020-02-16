var data = require("../posts.json");
var user = require("../user.json");
var filteredData = JSON.parse(JSON.stringify(data));

exports.view = function(req, res){
  user.level = (req.query.dropdown);
  console.log(user);
  var expString = "";
  var gymString = "";
  for (i = 0; i < filteredData.posts.length; i++){
    expString = filteredData.posts[i].level.toLowerCase();
    gymString = filteredData.posts[i].gym;
    if (expString.localeCompare(user.level)){
        filteredData.posts.splice(i, 1);
        i--;
    }
  }

  res.render('recommended', filteredData);
};