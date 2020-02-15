var data = require("../posts.json");
var filteredData = JSON.parse(JSON.stringify(data));

exports.view = function(req, res){
  var expString = "";
  for (i = 0; i < filteredData.posts.length; i++){
    expString = filteredData.posts[i].level;
    if (expString.localeCompare("Novice")){
      filteredData.posts.splice(i, 1);
      i--;
    }
  }

  res.render('novice', filteredData);
};