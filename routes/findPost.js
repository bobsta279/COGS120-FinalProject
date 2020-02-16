var data = require("../posts.json");
var filteredData = JSON.parse(JSON.stringify(data));
var user = require("../user.json")

exports.findPost = function(req, res){
  var nameStr = Object.keys(req.query)[0] + "";
  nameStr = nameStr.toLowerCase();
  for (i = 0; i < filteredData.posts.length; i++){
    expString = filteredData.posts[i].name.toLowerCase();
    console.log(nameStr + " " + expString);

    if (expString.localeCompare(nameStr)){
        filteredData.posts.splice(i, 1);
        i--;
    }
  }

  console.log(filteredData);
    
    res.render('posts', filteredData);
    filteredData = JSON.parse(JSON.stringify(data));
};