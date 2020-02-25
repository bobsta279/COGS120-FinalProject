var data = require("../posts.json");
var user = require("../user.json");
var filteredData = JSON.parse(JSON.stringify(data));

exports.view = function(req, res){
  /*var expString = "";
  var gymString = "";
  var whenString = "";
  for (i = 0; i < filteredData.posts.length; i++){
    expString = filteredData.posts[i].level.toLowerCase();
    gymString = filteredData.posts[i].gym;
    whenString = filteredData.posts[i].when;
    if (expString.localeCompare(user.level) || gymString.localeCompare(user.gym) || whenString.localeCompare(user.when)){
        filteredData.posts.splice(i, 1);
        i--;
    }
  }*/

  res.render('index', filteredData);
};