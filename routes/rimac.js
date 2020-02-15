var data = require("../posts.json");
var filteredData = JSON.parse(JSON.stringify(data));

exports.view = function(req, res){
  var gymString = "";
  for (i = 0; i < filteredData.posts.length; i++){
    gymString = filteredData.posts[i].gym;
    if (gymString.localeCompare("RIMAC")){
      filteredData.posts.splice(i, 1);
      i--;
    }
  }

  res.render('rimac', filteredData);
};