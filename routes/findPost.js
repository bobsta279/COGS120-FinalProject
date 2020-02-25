var data;
var filteredData;
var user;

exports.findPost = function(req, res){
  data = require("../posts.json");
  filteredData = JSON.parse(JSON.stringify(data));
  user = require("../user.json");

  var nameStr = Object.keys(req.query)[0] + "";
  if(nameStr == ""){
    nameStr = user.firstName + user.lastName;
  }

  console.log(nameStr);

  nameStr = nameStr.toLowerCase();
  for (i = 0; i < filteredData.posts.length; i++){
    expString = filteredData.posts[i].name.toLowerCase();

    if (expString.localeCompare(nameStr)){
        filteredData.posts.splice(i, 1);
        i--;
    }
  }

    
    res.render('posts', filteredData);
    filteredData = JSON.parse(JSON.stringify(data));
};