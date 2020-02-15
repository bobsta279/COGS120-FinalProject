var data = require("../posts.json");
var filteredData = JSON.parse(JSON.stringify(data));

exports.view = function(req, res){
  var expString = "";
  var gymString = "";
  for (i = 0; i < filteredData.posts.length; i++){
    expString = filteredData.posts[i].level;
    gymString = filteredData.posts[i].gym;
    if (gymString.localeCompare("Main Gym") || expString.localeCompare("Novice")){
        filteredData.posts.splice(i, 1);
        i--;
    }
  }

  res.render('maingym-novice', filteredData);
};